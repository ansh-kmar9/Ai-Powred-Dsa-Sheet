import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useAuthToasts from "../hooks/useAuthToasts";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { LoginSkeleton } from "../components/SkeletonLoader";

const LoginPage = () => {
  const { isAuthenticated, loading, login } = useAuth();

  // Use the custom hook for auth toasts
  useAuthToasts();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get("error");
    if (error) {
      console.error("Auth error:", error);
    }
  }, []);

  if (loading) {
    return <LoginSkeleton />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-full max-w-sm sm:max-w-md space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Welcome back
          </h1>
          <p className="text-sm sm:text-base text-zinc-400">
            Sign in to track your DSA progress
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl font-semibold text-center text-white">
              Sign in to your account
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4 sm:space-y-6">
            {/* Google Login Button */}
            <Button
              onClick={login}
              disabled={loading}
              className="w-full h-11 sm:h-12 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600 transition-all duration-200 text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin mr-3" />
              ) : (
                <FcGoogle size={20} className="mr-3 flex-shrink-0" />
              )}
              <span>Continue with Google</span>
            </Button>

            {/* Terms */}
            <p className="text-center text-xs sm:text-sm text-zinc-500 leading-relaxed px-2">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="underline underline-offset-4 hover:text-zinc-400 transition-colors"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline underline-offset-4 hover:text-zinc-400 transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-zinc-600">
          DSA Sheet — Built for developers
        </p>
      </div>
    </div>
  );
};

export default LoginPage;