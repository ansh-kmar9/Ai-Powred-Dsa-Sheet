import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import toast from "react-hot-toast";
import { sheetsAPI } from "../utils/api";
import QuestionCard from "../components/QuestionCard";
import { Progress } from "../components/Progress";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { SheetSkeleton } from "../components/SkeletonLoader";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Loader2,
  RotateCcw,
  Search,
  Filter,
  X,
  ExternalLink,
  Bot,
} from "lucide-react";
import { cn } from "../utils/cn";

const SheetPage = () => {
  const { sheetName } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {
    sheetProgress,
    fetchSheetProgress,
    toggleQuestionStatus,
    resetSheetProgress,
  } = useProgress();

  const [sheet, setSheet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [toggleLoading, setToggleLoading] = useState({});
  const [resetLoading, setResetLoading] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (sheetName) {
      loadSheetData();
    }
  }, [sheetName]);

  useEffect(() => {
    if (isAuthenticated && sheetName) {
      fetchSheetProgress(sheetName);
    }
  }, [isAuthenticated, sheetName]);

  const loadSheetData = async () => {
    try {
      setLoading(true);
      const response = await sheetsAPI.getSheet(sheetName);
      setSheet(response.data.sheet);

      if (response.data.sheet.topics.length > 0) {
        setExpandedTopics({ [response.data.sheet.topics[0].name]: true });
      }
    } catch (error) {
      console.error("Error loading sheet:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionToggle = async (questionId) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    setToggleLoading((prev) => ({ ...prev, [questionId]: true }));

    try {
      await toggleQuestionStatus(sheetName, questionId);
    } catch (error) {
      console.error("Error toggling question:", error);
    } finally {
      setToggleLoading((prev) => ({ ...prev, [questionId]: false }));
    }
  };

  const handleResetProgress = async () => {
    if (!isAuthenticated) return;
    setShowResetModal(true);
  };

  const confirmResetProgress = async () => {
    setResetLoading(true);
    try {
      await resetSheetProgress(sheetName);
      setShowResetModal(false);
      // Use exact same pattern as AuthContext
      toast.success("Progress reset successfully");
    } catch (error) {
      console.error("Error resetting progress:", error);
      toast.error("Failed to reset progress");
    } finally {
      setResetLoading(false);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showResetModal) {
        setShowResetModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showResetModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showResetModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showResetModal]);

  const toggleTopic = (topicName) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicName]: !prev[topicName],
    }));
  };

  const isQuestionSolved = (questionId) => {
    if (!isAuthenticated || !sheetProgress[sheetName]) return false;
    const questionProgress = sheetProgress[sheetName].questions?.find(
      (q) => q.questionId.toString() === questionId.toString()
    );
    return questionProgress?.isSolved || false;
  };

  const getFilteredQuestions = (questions) => {
    if (!questions || !Array.isArray(questions)) {
      console.warn("Invalid questions array:", questions);
      return [];
    }

    return questions.filter((question) => {
      // Ensure question has required properties
      if (!question || typeof question !== "object") {
        console.warn("Invalid question object:", question);
        return false;
      }

      const matchesDifficulty =
        difficultyFilter === "All" || question.difficulty === difficultyFilter;
      const matchesSearch =
        searchQuery === "" ||
        (question.title &&
          question.title.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesStatus = true;
      if (statusFilter === "Solved") {
        matchesStatus = isQuestionSolved(question._id);
      } else if (statusFilter === "Unsolved") {
        matchesStatus = !isQuestionSolved(question._id);
      }

      return matchesDifficulty && matchesStatus && matchesSearch;
    });
  };

  const getTopicProgress = (topic) => {
    if (!topic || !topic.questions || !Array.isArray(topic.questions)) {
      console.warn("Invalid topic or questions array:", topic);
      return { solved: 0, total: 0 };
    }

    if (!isAuthenticated || !sheetProgress[sheetName]) {
      return { solved: 0, total: topic.questions.length };
    }

    const solved = topic.questions.filter((question) => {
      if (!question || !question._id) {
        console.warn("Question missing _id:", question);
        return false;
      }
      return isQuestionSolved(question._id);
    }).length;

    return { solved, total: topic.questions.length };
  };

  const getOverallProgress = () => {
    if (!sheet) return { solved: 0, total: 0 };
    let totalQuestions = 0;
    let solvedQuestions = 0;

    sheet.topics.forEach((topic) => {
      totalQuestions += topic.questions.length;
      if (isAuthenticated && sheetProgress[sheetName]) {
        solvedQuestions += topic.questions.filter((question) =>
          isQuestionSolved(question._id)
        ).length;
      }
    });
    return { solved: solvedQuestions, total: totalQuestions };
  };

  if (loading) {
    return <SheetSkeleton />;
  }

  if (!sheet) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-4">
        <div className="text-center space-y-4 max-w-md w-full">
          <p className="text-zinc-400">Sheet not found</p>
          <Button
            onClick={() => navigate("/sheets")}
            className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200"
          >
            Back to Sheets
          </Button>
        </div>
      </div>
    );
  }

  const overallProgress = getOverallProgress();
  const progressPercentage =
    overallProgress.total > 0
      ? Math.round((overallProgress.solved / overallProgress.total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-6xl">
        {/* Header */}
        <header className="mb-6 sm:mb-12">
          {/* Go Back Button */}
          <div className="mb-3 sm:mb-6">
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="flex items-center space-x-2 text-zinc-400 hover:text-white hover:bg-zinc-800 p-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </Button>
          </div>

          {/* Header Content */}
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
            {/* Sheet Info */}
            <div className="flex items-start space-x-3 sm:space-x-4 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight break-words">
                  {sheet.name === "Interview"
                    ? "Interview - More company is adding"
                    : sheet.name}
                </h1>

                <p className="text-zinc-400 mt-1 text-sm sm:text-base">
                  {sheet.topics.length} topic
                  {sheet.topics.length !== 1 ? "s" : ""} •{" "}
                  {overallProgress.total} question
                  {overallProgress.total !== 1 ? "s" : ""}
                </p>

                {sheet.name === "Interview" && (
                  <p className="text-zinc-500 mt-2 text-sm">
                    This question are taken from the company tags of the
                    LeetCode
                  </p>
                )}
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 sm:p-4 w-full lg:w-auto lg:min-w-[300px]">
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
                <span className="text-sm font-medium text-zinc-300 flex-shrink-0">
                  Overall Progress
                </span>
                <div className="flex items-center space-x-3 flex-1">
                  <div className="flex-1">
                    <Progress
                      value={progressPercentage}
                      className="h-2 bg-zinc-700"
                    />
                  </div>
                  <span className="text-lg font-bold text-white whitespace-nowrap">
                    {progressPercentage}%
                  </span>
                  <span className="text-sm text-zinc-400 whitespace-nowrap">
                    {overallProgress.solved}/{overallProgress.total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Controls */}
        <div className="mb-4 sm:mb-8">
          <div className="flex flex-col space-y-3">
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div className="flex items-center space-x-2 text-zinc-400">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filters</span>
              </div>

              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3">
                {/* Difficulty Filter */}
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="h-9 sm:h-10 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600 w-full sm:w-auto"
                >
                  {["All", "Easy", "Medium", "Hard"].map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-zinc-900 text-white"
                    >
                      {option === "All" ? "All Levels" : option}
                    </option>
                  ))}
                </select>

                {isAuthenticated && (
                  <>
                    {/* Status Filter */}
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="h-9 sm:h-10 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600 w-full sm:w-auto"
                    >
                      {["All", "Solved", "Unsolved"].map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-zinc-900 text-white"
                        >
                          {option}
                        </option>
                      ))}
                    </select>

                    {/* Reset Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleResetProgress}
                      className="w-full sm:w-auto border-zinc-800 text-black-300 bg-zinc-800 hover:text-black h-9 sm:h-10"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      <span className="sm:inline">Reset Progress</span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-2 sm:space-y-4">
          {sheet.topics.map((topic, topicIndex) => {
            const topicProgress = getTopicProgress(topic);
            const filteredQuestions = getFilteredQuestions(topic.questions);
            const isExpanded = expandedTopics[topic.name];

            return (
              <div key={topic.name}>
                <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                  {/* Topic Header */}
                  <div
                    className="flex cursor-pointer items-center justify-between p-3 sm:p-6"
                    onClick={() => toggleTopic(topic.name)}
                  >
                    <div className="flex min-w-0 flex-1 items-start sm:items-center space-x-2 sm:space-x-4">
                      {/* Expand/Collapse Icon & Title */}
                      <div className="flex items-center space-x-2 min-w-0">
                        <div className="transition-transform duration-200 flex-shrink-0">
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400" />
                          ) : (
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400" />
                          )}
                        </div>
                        <h3 className="font-semibold text-white text-sm sm:text-lg break-words min-w-0">
                          {topic.name}
                        </h3>
                      </div>

                      {/* Progress Bar - Hidden on mobile when title is long */}
                      <div className="hidden sm:flex min-w-0 flex-1 items-center space-x-3 lg:space-x-4 max-w-xs lg:max-w-sm">
                        <div className="flex-1">
                          <Progress
                            value={
                              topicProgress.total > 0
                                ? Math.round(
                                    (topicProgress.solved /
                                      topicProgress.total) *
                                      100
                                  )
                                : 0
                            }
                            className="h-2 bg-zinc-700"
                          />
                        </div>
                        <span className="text-sm text-zinc-400 whitespace-nowrap">
                          {topicProgress.solved}/{topicProgress.total}
                        </span>
                      </div>
                    </div>

                    {/* Question Count */}
                    <div className="text-xs sm:text-sm text-zinc-500 flex-shrink-0 ml-2">
                      {filteredQuestions.length} question
                      {filteredQuestions.length !== 1 ? "s" : ""}
                    </div>
                  </div>

                  {/* Mobile Progress Bar */}
                  <div className="sm:hidden px-3 pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1">
                        <Progress
                          value={
                            topicProgress.total > 0
                              ? Math.round(
                                  (topicProgress.solved / topicProgress.total) *
                                    100
                                )
                              : 0
                          }
                          className="h-2 bg-zinc-700"
                        />
                      </div>
                      <span className="text-sm text-zinc-400 whitespace-nowrap">
                        {topicProgress.solved}/{topicProgress.total}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={cn(
                      "topic-content transition-all duration-500 ease-in-out",
                      isExpanded
                        ? "expanded opacity-100"
                        : "collapsed opacity-0"
                    )}
                  >
                    <CardContent className="border-t border-zinc-800/50 p-0">
                      {filteredQuestions.length > 0 ? (
                        <div className="divide-y divide-zinc-800/50">
                          {filteredQuestions.map((question, questionIndex) => (
                            <div
                              key={question._id}
                              className={cn(
                                "transition-all duration-200 hover:bg-zinc-800/20",
                                isMobile
                                  ? "px-2 py-1"
                                  : "px-2 py-0.5 sm:px-4 sm:py-1"
                              )}
                            >
                              {isMobile ? (
                                // Mobile Layout with Horizontal Scrolling
                                <div className="min-w-0">
                                  <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 pb-2">
                                    <div className="flex min-w-max space-x-3 px-2">
                                      {/* Status Button */}
                                      <div className="flex-shrink-0">
                                        <button
                                          onClick={() =>
                                            handleQuestionToggle(question._id)
                                          }
                                          disabled={toggleLoading[question._id]}
                                          className={cn(
                                            "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                                            isQuestionSolved(question._id)
                                              ? "bg-green-500/20 border-green-500/50 text-green-400"
                                              : "border-zinc-600 hover:border-zinc-500 text-zinc-500 hover:text-zinc-400",
                                            toggleLoading[question._id] &&
                                              "opacity-75 cursor-not-allowed"
                                          )}
                                        >
                                          {toggleLoading[question._id] ? (
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                          ) : isQuestionSolved(question._id) ? (
                                            <svg
                                              className="w-4 h-4"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          ) : null}
                                        </button>
                                      </div>

                                      {/* Difficulty Badge */}
                                      <div
                                        className={cn(
                                          "flex-shrink-0 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
                                          question.difficulty === "Easy" &&
                                            "bg-green-500/10 text-green-400 border-green-500/20",
                                          question.difficulty === "Medium" &&
                                            "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
                                          question.difficulty === "Hard" &&
                                            "bg-red-500/10 text-red-400 border-red-500/20"
                                        )}
                                      >
                                        <div
                                          className={cn(
                                            "w-1.5 h-1.5 rounded-full mr-2",
                                            question.difficulty === "Easy" &&
                                              "bg-green-400",
                                            question.difficulty === "Medium" &&
                                              "bg-yellow-400",
                                            question.difficulty === "Hard" &&
                                              "bg-red-400"
                                          )}
                                        />
                                        {question.difficulty}
                                      </div>

                                      {/* Question Title */}
                                      <div className="flex-shrink-0 min-w-0 max-w-xs">
                                        <a
                                          href={question.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center space-x-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors duration-300"
                                        >
                                          <span className="truncate">
                                            {question.title}
                                          </span>
                                          <ExternalLink className="h-3 w-3 text-zinc-500 flex-shrink-0" />
                                        </a>
                                      </div>

                                      {/* Topics */}
                                      {question.topics &&
                                        question.topics.length > 0 && (
                                          <div className="flex-shrink-0 flex space-x-1">
                                            {question.topics.map(
                                              (topic, index) => (
                                                <span
                                                  key={index}
                                                  className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded border border-zinc-700"
                                                >
                                                  {topic}
                                                </span>
                                              )
                                            )}
                                          </div>
                                        )}

                                      {/* Companies */}
                                      {question.companies &&
                                        question.companies.length > 0 && (
                                          <div className="flex-shrink-0 flex space-x-1">
                                            {question.companies.map(
                                              (company, index) => (
                                                <span
                                                  key={index}
                                                  className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
                                                >
                                                  {company}
                                                </span>
                                              )
                                            )}
                                          </div>
                                        )}

                                      {/* AI Bot Button */}
                                      <div className="flex-shrink-0">
                                        <button
                                          onClick={() => {
                                            const promptText = `Explain me how to approach this question "${question.title}"`;
                                            navigate(
                                              `/ai-doubt-solver?question=${encodeURIComponent(
                                                promptText
                                              )}`
                                            );
                                          }}
                                          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-600 transition-all duration-300 text-zinc-400 hover:text-white"
                                          title="Ask approach of this question"
                                        >
                                          <Bot className="h-4 w-4" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                // Desktop Layout (Original QuestionCard)
                                <QuestionCard
                                  question={question}
                                  isAuthenticated={isAuthenticated}
                                  isSolved={isQuestionSolved(question._id)}
                                  onToggle={handleQuestionToggle}
                                  isMobile={isMobile}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex h-16 sm:h-24 items-center justify-center text-zinc-500 px-4">
                          <p className="text-sm text-center">
                            No questions match the current filters.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset Progress Confirmation Modal */}
      {showResetModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
          onClick={() => setShowResetModal(false)}
        >
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 sm:p-6 w-full max-w-md animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-lg font-semibold text-white">
                Reset Progress
              </h3>
              <button
                onClick={() => setShowResetModal(false)}
                className="text-zinc-400 hover:text-white p-1 -mr-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-zinc-400 mb-6 text-sm sm:text-base">
              Are you sure you want to reset your progress for this sheet? This
              action cannot be undone.
            </p>
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <Button
                variant="outline"
                onClick={() => setShowResetModal(false)}
                className="w-full sm:w-auto border-zinc-700 text-black-300 hover:bg-zinc-800"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmResetProgress}
                disabled={resetLoading}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resetLoading ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Resetting...</span>
                  </div>
                ) : (
                  "Reset Progress"
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for mobile horizontal scrolling */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #27272a;
          border-radius: 2px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #52525b;
          border-radius: 2px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #71717a;
        }

        /* Firefox */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #52525b #27272a;
        }
      `}</style>
    </div>
  );
};

export default SheetPage;
