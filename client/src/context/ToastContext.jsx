import React, { createContext, useContext, useState } from "react";
import ToastContainer from "../components/Toast";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info", duration = 4000) => {
    // Check if a toast with the same message and type already exists
    const existingToast = toasts.find(
      (toast) => toast.message === message && toast.type === type
    );

    if (existingToast) {
      return existingToast.id; // Don't add duplicate toast
    }

    const id = Date.now() + Math.random();
    const newToast = {
      id,
      message,
      type,
      duration,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Auto remove toast after duration
    setTimeout(() => {
      removeToast(id);
    }, duration);

    return id;
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const showSuccess = (message, duration = 4000) => {
    return addToast(message, "success", duration);
  };

  const showError = (message, duration = 4000) => {
    return addToast(message, "error", duration);
  };

  const showWarning = (message, duration = 4000) => {
    return addToast(message, "warning", duration);
  };

  const showInfo = (message, duration = 4000) => {
    return addToast(message, "info", duration);
  };

  const value = {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export default ToastContext;
