import React, { createContext, useContext, useReducer, useEffect } from "react";
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

      if (token) {
        console.log("AuthContext - Setting token in localStorage:", token);
        localStorage.setItem("token", token);
        // Clean up URL
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }

      // Check stored token or session
      const storedToken = localStorage.getItem("token");
      console.log(
        "AuthContext - Stored token:",
        storedToken ? "exists" : "none"
      );

      if (storedToken) {
        console.log("AuthContext - Verifying stored token...");
        const response = await authAPI.verifyToken(storedToken);
        console.log(
          "AuthContext - Token verification response:",
          response.data
        );
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
      } else {
        // Try session-based auth
        console.log("AuthContext - Trying session-based auth...");
        const response = await authAPI.getCurrentUser();
        console.log("AuthContext - Session auth response:", response.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
      }
    } catch (error) {
      console.error("AuthContext - Auth error:", error);
      localStorage.removeItem("token");
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.response?.data?.message || "Authentication failed",
      });
    }
  };

  const login = () => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    window.location.href = `${apiUrl}/auth/google`;
  };

  const logout = async () => {
    try {
      await authAPI.logout();
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Logout error:", error);
      // Force logout even if API call fails
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
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
