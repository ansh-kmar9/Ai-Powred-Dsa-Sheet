import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from "react";
import toast from "react-hot-toast";
import { authAPI } from "../utils/api";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false, loading: false };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const loginToastShown = useRef(false);
  const logoutToastShown = useRef(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      // Check for token in URL (from OAuth redirect)
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      console.log("AuthContext - URL token:", token);
      console.log("AuthContext - Current URL:", window.location.href);
      console.log(
        "AuthContext - API Base URL:",
        import.meta.env.VITE_API_URL || "http://localhost:5000"
      );

      if (token) {
        console.log("AuthContext - Setting token in localStorage:", token);
        localStorage.setItem("token", token);
        // Clean up URL
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );

        // Immediately verify the token and set user
        try {
          const response = await authAPI.verifyToken();
          console.log(
            "AuthContext - Token verification response:",
            response.data
          );
          dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });

          // Show login success toast after successful verification
          if (!loginToastShown.current) {
            setTimeout(() => {
              toast.success("Welcome! Sign in Successful");
              loginToastShown.current = true;
            }, 500);
          }
          return; // Exit early since we're authenticated
        } catch (tokenError) {
          console.error("AuthContext - Token verification failed:", tokenError);
          localStorage.removeItem("token");
          // Continue to fallback authentication methods
        }
      }

      // Check stored token or session
      const storedToken = localStorage.getItem("token");
      console.log(
        "AuthContext - Stored token:",
        storedToken ? "exists" : "none"
      );

      if (storedToken) {
        console.log("AuthContext - Verifying stored token...");
        try {
          const response = await authAPI.verifyToken();
          console.log(
            "AuthContext - Token verification response:",
            response.data
          );
          dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
          return; // Exit early on success
        } catch (tokenError) {
          console.error("AuthContext - Token verification failed:", tokenError);
          localStorage.removeItem("token");
          // Try session-based auth as fallback
        }
      }

      // Try session-based auth as fallback
      console.log("AuthContext - Trying session-based auth...");
      try {
        const response = await authAPI.getCurrentUser();
        console.log("AuthContext - Session auth response:", response.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
      } catch (sessionError) {
        console.error("AuthContext - Session auth failed:", sessionError);
        // Only dispatch error if we're not on login page already
        if (!window.location.pathname.includes("/login")) {
          dispatch({
            type: "LOGIN_ERROR",
            payload: "Authentication failed",
          });
        } else {
          // Just set loading to false if we're already on login page
          dispatch({ type: "SET_LOADING", payload: false });
        }
      }
    } catch (error) {
      console.error("AuthContext - Unexpected auth error:", error);
      if (!window.location.pathname.includes("/login")) {
        localStorage.removeItem("token");
        dispatch({
          type: "LOGIN_ERROR",
          payload:
            error.response?.data?.message ||
            error.message ||
            "Authentication failed",
        });
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    } finally {
      // Ensure loading is always set to false
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const login = (returnUrl = null) => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    let loginUrl = `${apiUrl}/auth/google`;

    // Add return URL as state parameter if provided
    if (returnUrl) {
      loginUrl += `?state=${encodeURIComponent(returnUrl)}`;
    }

    window.location.href = loginUrl;
  };

  const logout = async () => {
    if (logoutToastShown.current) return; // Prevent multiple logout calls

    try {
      logoutToastShown.current = true;
      await authAPI.logout();
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
      toast.success("Successfully logged out");

      // Reset login toast flag for next login
      loginToastShown.current = false;
    } catch (error) {
      console.error("Logout error:", error);
      // Force logout even if API call fails
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
      toast.success("Successfully logged out");

      // Reset login toast flag for next login
      loginToastShown.current = false;
    } finally {
      // Reset logout toast flag after a delay
      setTimeout(() => {
        logoutToastShown.current = false;
      }, 1000);
    }
  };

  const value = {
    ...state,
    login,
    logout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
