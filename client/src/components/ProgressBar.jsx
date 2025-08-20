import React from "react";
import { Card, CardContent } from "./Card";
import { Progress } from "./Progress";
import { cn } from "../utils/cn";

const ProgressBar = ({ solved, total, label, className }) => {
  const percentage = total > 0 ? Math.round((solved / total) * 100) : 0;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">
          {solved}/{total} ({percentage}%)
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

export default ProgressBar;
