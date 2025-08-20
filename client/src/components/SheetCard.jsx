import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";
import ProgressBar from "./ProgressBar";
import { BookOpen, Target, TrendingUp } from "lucide-react";

const SheetCard = ({ sheet, progress, stats }) => {
  const navigate = useNavigate();

  const handleViewSheet = () => {
    navigate(`/sheet/${sheet.name}`);
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return <div className="w-3 h-3 rounded-full bg-green-500"></div>;
      case "Medium":
        return <div className="w-3 h-3 rounded-full bg-yellow-500"></div>;
      case "Hard":
        return <div className="w-3 h-3 rounded-full bg-red-500"></div>;
      default:
        return null;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span>{sheet.name}</span>
          </CardTitle>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Target className="h-4 w-4" />
            <span>{stats?.totalQuestions || 0} questions</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ProgressBar
          solved={progress?.solved || 0}
          total={progress?.total || 0}
          label="Overall Progress"
        />

        {stats?.difficulty && (
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              {getDifficultyIcon("Easy")}
              <span className="text-gray-600">
                Easy: {stats.difficulty.easy}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {getDifficultyIcon("Medium")}
              <span className="text-gray-600">
                Medium: {stats.difficulty.medium}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {getDifficultyIcon("Hard")}
              <span className="text-gray-600">
                Hard: {stats.difficulty.hard}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <TrendingUp className="h-4 w-4" />
            <span>{progress?.percentage || 0}% Complete</span>
          </div>
          <Button onClick={handleViewSheet} size="sm">
            View Sheet
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SheetCard;
