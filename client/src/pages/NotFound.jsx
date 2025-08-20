import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ArrowLeft, Home, Search, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
              <AlertCircle className="h-10 w-10 text-zinc-400" />
            </div>
          </div>

          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-4 text-zinc-800">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Page not found
          </h2>

          {/* Description */}
          <p className="text-lg text-zinc-400 mb-12 max-w-md mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button
                size="lg"
                className="min-w-32 bg-white text-black hover:bg-zinc-200"
              >
                <Home className="mr-2 h-4 w-4" />
                Go home
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="min-w-32 bg-white text-black hover:bg-zinc-200"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back
            </Button>
          </div>

          {/* Additional Help */}
          
        </div>
      </div>
    </div>
  );
};

export default NotFound;
