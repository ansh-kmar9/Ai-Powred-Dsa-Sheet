import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useAuthToasts from "../hooks/useAuthToasts";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Loader2, Chrome } from "lucide-react";
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
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-400">
            Sign in to track your DSA progress
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-lg font-medium text-center text-zinc-100">
              Sign in to your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={login}
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-zinc-700"
              size="default"
            >
              <FcGoogle size={20} className="mr-3" />
              Continue with Google
            </Button>

            <p className="mt-4 text-center text-xs text-zinc-500">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="underline underline-offset-4 hover:text-zinc-400"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline underline-offset-4 hover:text-zinc-400"
              >
                Privacy Policy
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Footer text */}
        <p className="text-center text-xs text-zinc-600">
          DSA Sheet — Built for developers
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
