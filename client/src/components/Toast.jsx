import React, { useEffect } from "react";
import { useToast } from "../context/ToastContext";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "../utils/cn";

const Toast = ({ toast, onRemove }) => {
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        onRemove(toast.id);
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast.id, toast.duration, onRemove]);

  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <CheckCircle className="h-5 w-5" />;
      case "error":
        return <AlertCircle className="h-5 w-5" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getStyles = () => {
    switch (toast.type) {
      case "success":
        return "bg-green-500/10 border-green-500/20 text-green-400";
      case "error":
        return "bg-red-500/10 border-red-500/20 text-red-400";
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/20 text-yellow-400";
      default:
        return "bg-blue-500/10 border-blue-500/20 text-blue-400";
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 rounded-lg border backdrop-blur-sm shadow-lg animate-in slide-in-from-right-full duration-300",
        getStyles()
      )}
    >
      <div className="flex items-center space-x-3">
        {getIcon()}
        <span className="text-sm font-medium">{toast.message}</span>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="text-current hover:text-white transition-colors p-1"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 w-full max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
};

export default ToastContainer;
