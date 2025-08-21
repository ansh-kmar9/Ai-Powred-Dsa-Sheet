import React from "react";

// Base skeleton component
export const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 bg-[length:200%_100%] animate-shimmer rounded ${className}`}
      {...props}
    />
  );
};

// Login page skeleton loader
export const LoginSkeleton = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header skeleton */}
        <div className="text-center space-y-2">
          <Skeleton className="h-7 w-40 mx-auto" />
          <Skeleton className="h-4 w-56 mx-auto" />
        </div>

        {/* Login Card skeleton */}
        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-6">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard skeleton loader
export const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header skeleton */}
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-4 w-96" />
        </div>

        {/* Stats cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-6"
            >
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>

        {/* Sheet cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="w-8 h-8 rounded" />
                <Skeleton className="h-6 w-32" />
              </div>
              
              <Skeleton className="h-4 w-full mb-3" />
              
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sheet page skeleton loader
export const SheetSkeleton = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header skeleton */}
        <div className="mb-8">
          <Skeleton className="h-6 w-20 mb-4" />
          <div className="flex items-center justify-between mb-6">
            <div>
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>

        {/* Filters skeleton */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Topics skeleton */}
        <div className="space-y-6">
          {[1, 2, 3].map((topicIndex) => (
            <div
              key={topicIndex}
              className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg overflow-hidden"
            >
              {/* Topic header */}
              <div className="p-4 border-b border-zinc-800">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>

              {/* Questions skeleton */}
              <div className="divide-y divide-zinc-800">
                {[1, 2, 3, 4].map((questionIndex) => (
                  <div key={questionIndex} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Skeleton className="w-4 h-4 rounded-full" />
                          <Skeleton className="h-5 w-64" />
                        </div>
                        <Skeleton className="h-3 w-16 ml-7" />
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-6 h-6 rounded" />
                        <Skeleton className="h-8 w-24 rounded-md" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Question card skeleton
export const QuestionCardSkeleton = () => {
  return (
    <div className="p-4 border-b border-zinc-800 last:border-b-0">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="h-5 w-64" />
          </div>
          <Skeleton className="h-3 w-16 ml-7" />
        </div>
        
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
};
