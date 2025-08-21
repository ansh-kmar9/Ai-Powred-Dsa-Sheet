import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { ExternalLink, Check, X, Loader2, Bot } from "lucide-react";
import { cn } from "../utils/cn";

const QuestionCard = ({
  question,
  isAuthenticated,
  isSolved = false,
  onToggle,
}) => {
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBotHovered, setIsBotHovered] = useState(false);
  const navigate = useNavigate();

  const handleToggle = async () => {
    if (!isAuthenticated || !onToggle) {
      console.log(
        "QuestionCard: Cannot toggle - not authenticated or no onToggle handler",
        {
          isAuthenticated,
          hasOnToggle: !!onToggle,
        }
      );
      return;
    }

    console.log("QuestionCard: Starting toggle for question", {
      questionId: question._id,
      questionTitle: question.title,
      currentSolvedState: isSolved,
    });

    setLoading(true);
    try {
      await onToggle(question._id);
      console.log("QuestionCard: Toggle completed successfully");
    } catch (error) {
      console.error("QuestionCard: Error toggling question:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAskApproach = () => {
    const promptText = `Explain me how to approach this question "${question.title}"`;
    navigate(`/ai-doubt-solver?question=${encodeURIComponent(promptText)}`);
  };

  const getDifficultyStyles = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Hard":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    }
  };

  return (
    <div className="group relative">
      <div
        className={cn(
          "flex items-center justify-between space-x-4 p-4 rounded-lg border transition-all duration-300",
          isSolved && isAuthenticated
            ? "bg-green-500/5 border-green-500/20"
            : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50"
        )}
      >
        {/* Left Section */}
        <div className="relative flex min-w-0 flex-1 items-center space-x-3">
          {/* Difficulty Badge */}
          <div
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300",
              getDifficultyStyles(question.difficulty)
            )}
          >
            <div
              className={cn(
                "w-1.5 h-1.5 rounded-full mr-2",
                question.difficulty === "Easy" && "bg-green-400",
                question.difficulty === "Medium" && "bg-yellow-400",
                question.difficulty === "Hard" && "bg-red-400",
                !["Easy", "Medium", "Hard"].includes(question.difficulty) &&
                  "bg-zinc-400"
              )}
            />
            {question.difficulty}
          </div>

          {/* Question Title */}
          <a
            href={question.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link relative flex min-w-0 flex-1 items-center space-x-2 text-sm font-medium text-white transition-all duration-300 hover:text-zinc-300"
          >
            <span className="truncate">{question.title}</span>
          </a>

          {/* AI Bot Icon */}
          <div className="relative flex-shrink-0">
            <button
              onClick={handleAskApproach}
              onMouseEnter={() => setIsBotHovered(true)}
              onMouseLeave={() => setIsBotHovered(false)}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-600 transition-all duration-300 text-zinc-400 hover:text-white hover:scale-105 transform"
              title="Ask approach of this question"
            >
              <Bot className="h-4 w-4" />
            </button>

            {/* Tooltip */}
            {isBotHovered && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-zinc-900 text-white text-xs rounded-lg shadow-lg border border-zinc-700 whitespace-nowrap z-20">
                Ask approach of this question
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Action Button */}
        {isAuthenticated && (
          <div className="relative shrink-0">
            <Button
              onClick={handleToggle}
              disabled={loading}
              size="sm"
              className={cn(
                "transition-all duration-300 font-medium",
                isSolved
                  ? "bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-white"
                  : "bg-white text-black hover:bg-zinc-200"
              )}
            >
              <div className="flex items-center space-x-1.5">
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : isSolved ? (
                  <>
                    <X className="h-4 w-4" />
                    <span>Unmark</span>
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Mark Solved</span>
                  </>
                )}
              </div>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
