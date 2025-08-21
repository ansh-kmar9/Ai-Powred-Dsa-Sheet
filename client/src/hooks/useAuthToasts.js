import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// Custom hook to handle auth-related toasts with duplicate prevention
export const useAuthToasts = () => {
  const location = useLocation();
  const toastShown = useRef(new Set());

  useEffect(() => {
    // Clear toast tracking when navigating to a new page
    const currentPath = location.pathname;
    const currentKey = `${currentPath}-unauthorized`;

    // Only show toast for unauthorized access if not already shown for this navigation
    if (location.state?.from && !toastShown.current.has(currentKey)) {
      const fromPath = location.state.from.pathname;

      if (
        currentPath === "/login" &&
        (fromPath === "/dashboard" || fromPath.startsWith("/sheet/"))
      ) {
        toast.error("You need to be signed in");
        toastShown.current.add(currentKey);
      }
    }

    // Clear old toast tracking when navigating away
    return () => {
      if (currentPath !== "/login") {
        toastShown.current.clear();
      }
    };
  }, [location]);
};

export default useAuthToasts;
