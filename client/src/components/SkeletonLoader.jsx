import React from "react";

// Base skeleton component
const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse bg-zinc-800/60 rounded ${className}`}
      {...props}
    />
  );
};

// Dashboard Skeleton - Matches exact Dashboard component structure
export const DashboardSkeleton = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">
      <div className="flex flex-1 flex-col space-y-6 p-4 md:p-8">
        {/* Header - matches Dashboard header exactly */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Skeleton className="h-8 w-72 mb-2" />
            <Skeleton className="h-4 w-96" />
          </div>
          <div className="flex items-center space-x-2">
            {/* Avatar skeleton */}
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Skeleton className="h-full w-full rounded-full" />
            </div>
          </div>
        </div>

        {/* Stats Cards - 3 cards grid matching exact structure */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-lg"
            >
              <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4" />
              </div>
              <div className="px-6 pb-6">
                <div className="text-2xl font-bold text-white mb-1">
                  <Skeleton className="h-8 w-16" />
                </div>
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          ))}
        </div>

        {/* Achievements section skeleton - conditional rendering match */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
          <div className="p-6">
            <div className="mb-4">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-80" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5"
                >
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content area - matches the exact 7-column grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Progress Chart - col-span-4 matching exact structure */}
          <div className="col-span-4 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="p-6">
              <div className="mb-6">
                <Skeleton className="h-6 w-56 mb-2" />
                <Skeleton className="h-4 w-80" />
              </div>

              {/* Progress bars for sheets - matching structure */}
              <div className="space-y-4 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                    {/* Custom Progress Bar matching exact structure */}
                    <div className="relative w-full overflow-hidden rounded-full bg-zinc-800">
                      <Skeleton className="h-2 w-full" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart area - matching h-80 */}
              <div className="h-80">
                <Skeleton className="h-full w-full" />
              </div>
            </div>
          </div>

          {/* Sidebar - col-span-3 matching exact structure */}
          <div className="col-span-3 space-y-4">
            {/* Progress Distribution Pie Chart */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="p-6">
                <Skeleton className="h-6 w-48 mb-6" />
                <div className="h-48">
                  <Skeleton className="h-full w-full rounded-lg" />
                </div>
                <div className="flex justify-center gap-4 text-sm mt-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions - matching exact structure */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="p-6">
                <div className="mb-6">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-60" />
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-full justify-between border border-zinc-700 bg-zinc-800/50 rounded-md p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Skeleton className="h-4 w-4 mr-2" />
                          <Skeleton className="h-4 w-28" />
                        </div>
                        <Skeleton className="h-4 w-4" />
                      </div>
                    </div>
                  ))}

                  {/* Separator - matching exact structure */}
                  <div className="my-4 h-px bg-zinc-800" />

                  {/* Last active - matching exact structure */}
                  <div className="flex items-center justify-between text-sm">
                    <Skeleton className="h-4 w-20" />
                    <div className="flex items-center">
                      <Skeleton className="h-3 w-3 mr-1" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sheet page skeleton loader - matches exact SheetPage component structure
export const SheetSkeleton = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header section - matching exact structure */}
        <header className="mb-12">
          {/* Go Back Button - matching exact structure */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 text-zinc-400 hover:text-white hover:bg-zinc-800 p-2 w-fit rounded">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                <Skeleton className="h-6 w-6" />
              </div>
              <div>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>

            {/* Progress Section - matching exact structure */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-4 w-16" />
                <div className="flex items-center space-x-3 flex-1">
                  <div className="flex-1 max-w-xs">
                    <Skeleton className="h-2 w-full rounded-full" />
                  </div>
                  <Skeleton className="h-6 w-8" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Controls section - matching exact structure */}
        <div className="mb-8">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="relative max-w-md flex-1">
              <Skeleton className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-zinc-400">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-10 w-24 rounded-lg" />
              <Skeleton className="h-10 w-20 rounded-lg" />
              <Skeleton className="h-10 w-32 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Topics section - matching exact structure */}
        <div className="space-y-3">
          {[1, 2, 3, 4].map((topicIndex) => (
            <div key={topicIndex}>
              <div className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/50 transition-colors rounded-lg">
                {/* Topic header - matching exact structure */}
                <div className="flex cursor-pointer items-center justify-between p-6">
                  <div className="flex min-w-0 flex-1 items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className="transition-transform duration-200">
                        <Skeleton className="h-5 w-5" />
                      </div>
                      <Skeleton className="h-6 w-40" />
                    </div>

                    <div className="flex min-w-0 flex-1 items-center space-x-4">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="flex-1 max-w-xs">
                          <Skeleton className="h-2 w-full rounded-full" />
                        </div>
                        <Skeleton className="h-4 w-12" />
                      </div>
                    </div>
                  </div>

                  <Skeleton className="h-4 w-20" />
                </div>

                {/* Questions section - expanded state for first 2 topics */}
                {topicIndex <= 1 && (
                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-[2000px] opacity-100">
                    <div className="border-t border-slate-800/50 p-0">
                      <div className="divide-y divide-slate-800/50">
                        {[1, 2, 3].map((questionIndex) => (
                          <div
                            key={questionIndex}
                            className="p-4 transition-all duration-200 hover:bg-slate-800/20"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <Skeleton className="h-6 w-16 rounded-full" />
                                <Skeleton className="h-5 w-80" />
                              </div>
                              <div className="flex items-center space-x-3">
                                <Skeleton className="h-8 w-8 rounded" />
                                <Skeleton className="h-8 w-24 rounded-lg" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
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

// Question card skeleton
export const QuestionCardSkeleton = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-5 w-80" />
      </div>
      <div className="flex items-center space-x-3">
        <Skeleton className="h-8 w-8 rounded" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
};

export default Skeleton;
