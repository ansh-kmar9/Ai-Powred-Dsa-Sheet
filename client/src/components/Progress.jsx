import React from "react";
import { cn } from "../utils/cn";

const Progress = React.forwardRef(
  ({ className, value = 0, max = 100, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-gray-100",
        className
      )}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-zinc-100 transition-all progress-bar"
        style={{
          transform: `translateX(-${100 - (value / max) * 100}%)`,
        }}
      />
    </div>
  )
);
Progress.displayName = "Progress";

export { Progress };
