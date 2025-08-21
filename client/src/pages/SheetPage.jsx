import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
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
    if (!isAuthenticated) return;
    try {
      await toggleQuestionStatus(sheetName, questionId);
    } catch (error) {
      console.error("Error toggling question:", error);
    }
  };

  const handleResetProgress = async () => {
    if (
      !isAuthenticated ||
      !confirm("Are you sure you want to reset all progress for this sheet?")
    ) {
      return;
    }
    try {
      await resetSheetProgress(sheetName);
    } catch (error) {
      console.error("Error resetting progress:", error);
    }
  };

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
    return questions.filter((question) => {
      const matchesDifficulty =
        difficultyFilter === "All" || question.difficulty === difficultyFilter;
      const matchesSearch =
        searchQuery === "" ||
        question.title.toLowerCase().includes(searchQuery.toLowerCase());

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
    if (!isAuthenticated || !sheetProgress[sheetName]) {
      return { solved: 0, total: topic.questions.length };
    }
    const solved = topic.questions.filter((question) =>
      isQuestionSolved(question._id)
    ).length;
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
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="text-center space-y-4">
          <p className="text-zinc-400">Sheet not found</p>
          <Button
            onClick={() => navigate("/sheets")}
            className="bg-white text-black hover:bg-zinc-200"
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
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="mb-12">
          {/* Go Back Button */}
          <div className="mb-6">
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="flex items-center space-x-2 text-zinc-400 hover:text-white hover:bg-zinc-800 p-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {sheet.name}
                </h1>
                <p className="text-zinc-400 mt-1">
                  {sheet.topics.length} topics • {overallProgress.total}{" "}
                  questions
                </p>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-zinc-300">
                  Progress
                </span>
                <div className="flex items-center space-x-3 flex-1">
                  <div className="flex-1 max-w-xs">
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
        <div className="mb-8">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600"
              />
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-zinc-400">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filters</span>
              </div>

              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="h-10 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600"
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
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-10 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600"
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

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleResetProgress}
                    className="shrink-0 border-zinc-800 text-zinc-300 bg-zinc-800 hover:text-black"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset Progress
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Animated Topics */}
        <div className="space-y-3">
          {sheet.topics.map((topic, topicIndex) => {
            const topicProgress = getTopicProgress(topic);
            const filteredQuestions = getFilteredQuestions(topic.questions);
            const isExpanded = expandedTopics[topic.name];

            return (
              <div key={topic.name}>
                <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                  <div
                    className="flex cursor-pointer items-center justify-between p-6"
                    onClick={() => toggleTopic(topic.name)}
                  >
                    <div className="flex min-w-0 flex-1 items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        <div className="transition-transform duration-200">
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-zinc-400" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-zinc-400" />
                          )}
                        </div>
                        <h3 className="font-semibold text-white text-lg">
                          {topic.name}
                        </h3>
                      </div>

                      <div className="flex min-w-0 flex-1 items-center space-x-4">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="flex-1 max-w-xs">
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
                    </div>

                    <div className="text-sm text-zinc-500">
                      {filteredQuestions.length} question
                      {filteredQuestions.length !== 1 ? "s" : ""}
                    </div>
                  </div>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isExpanded
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <CardContent className="border-t border-slate-800/50 p-0">
                      {filteredQuestions.length > 0 ? (
                        <div className="divide-y divide-slate-800/50">
                          {filteredQuestions.map((question, questionIndex) => (
                            <div
                              key={question._id}
                              className={cn(
                                "p-4 transition-all duration-200 hover:bg-slate-800/20",
                                isExpanded &&
                                  "animate-in fade-in-50 slide-in-from-left-4 duration-300"
                              )}
                              style={{
                                animationDelay: `${questionIndex * 50}ms`,
                              }}
                            >
                              <QuestionCard
                                question={question}
                                isAuthenticated={isAuthenticated}
                                isSolved={isQuestionSolved(question._id)}
                                onToggle={handleQuestionToggle}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex h-24 items-center justify-center text-zinc-500">
                          <p className="text-sm">
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
    </div>
  );
};

export default SheetPage;
