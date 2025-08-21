import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  Loader2,
  Trophy,
  Target,
  TrendingUp,
  BookOpen,
  Star,
  Award,
  ArrowRight,
  Activity,
  Zap,
  Clock,
  CheckCircle,
  BarChart3,
  Calendar,
  Code,
  Brain,
  Flame,
  Users,
  Settings,
  MoreHorizontal,
} from "lucide-react";

const Dashboard = () => {
  const { isAuthenticated, loading: authLoading, user } = useAuth();
  const {
    overallProgress,
    fetchOverallProgress,
    loading: progressLoading,
  } = useProgress();
  const [loading, setLoading] = useState(true);

  // Add debug logging
  useEffect(() => {
    console.log("Dashboard - Auth State:", { isAuthenticated, authLoading, user });
    console.log("Dashboard - URL:", window.location.href);
    console.log("Dashboard - Token in localStorage:", localStorage.getItem("token"));
  }, [isAuthenticated, authLoading, user]);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = async () => {
    try {
      setLoading(true);
      await fetchOverallProgress();
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-100" />
          <p className="text-sm text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Calculate statistics
  const totalQuestions = Object.values(overallProgress).reduce(
    (sum, sheet) => sum + sheet.total,
    0
  );
  const totalSolved = Object.values(overallProgress).reduce(
    (sum, sheet) => sum + sheet.solved,
    0
  );
  const overallPercentage =
    totalQuestions > 0 ? Math.round((totalSolved / totalQuestions) * 100) : 0;
  const completedSheets = Object.values(overallProgress).filter(
    (sheet) => sheet.total > 0 && sheet.percentage === 100
  ).length;
  const totalSheets = Object.keys(overallProgress).length;

  // Chart data
  // Chart data
  const progressData = Object.entries(overallProgress).map(([name, data]) => ({
    name: name.length > 15 ? name.substring(0, 15) + "..." : name,
    solved: data.solved,
    total: data.total,
    percentage: data.percentage,
  }));

  const pieData = [
    { name: "Solved", value: totalSolved, fill: "#3b82f6" },
    { name: "Remaining", value: totalQuestions - totalSolved, fill: "#1e293b" },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const getMotivationalMessage = () => {
    if (overallPercentage === 0) {
      return "Ready to start your coding journey? Pick a sheet and begin!";
    } else if (overallPercentage < 25) {
      return "Great start! Keep building momentum with consistent practice.";
    } else if (overallPercentage < 50) {
      return "Excellent progress! Stay focused and keep pushing forward.";
    } else if (overallPercentage < 75) {
      return "Impressive work! You're well on your way to mastering DSA.";
    } else if (overallPercentage < 100) {
      return "Outstanding progress! You're almost there - finish strong!";
    } else {
      return "Congratulations! You've mastered all available problems! 🎉";
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">
      <div className="flex flex-1 flex-col space-y-6 p-4 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-white">
              {getGreeting()}, {user?.name?.split(" ")[0]}!
            </h2>
            <p className="text-zinc-400">{getMotivationalMessage()}</p>
          </div>
          <div className="flex items-center space-x-2">
            {/* Avatar */}
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              {user?.picture ? (
                <img
                  className="aspect-square h-full w-full"
                  src={user.picture}
                  alt={user.name}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-800 text-sm font-medium">
                  {user?.name?.charAt(0) || "U"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Overall Progress Card */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-300">
                Overall Progress
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-zinc-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {overallPercentage}%
              </div>
              <p className="text-xs text-zinc-400">
                {totalSolved} of {totalQuestions} solved
              </p>
            </CardContent>
          </Card>

          {/* Problems Solved Card */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-300">
                Problems Solved
              </CardTitle>
              <Target className="h-4 w-4 text-zinc-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalSolved}</div>
              <p className="text-xs text-zinc-400">
                Keep solving more problems
              </p>
            </CardContent>
          </Card>

          {/* Sheets Completed Card */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-300">
                Sheets Completed
              </CardTitle>
              <Trophy className="h-4 w-4 text-zinc-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {completedSheets}
              </div>
              <p className="text-xs text-zinc-400">
                {totalSheets - completedSheets} remaining
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        {(completedSheets > 0 || totalSolved >= 10) && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                Recent Achievements
              </CardTitle>
              <p className="text-sm text-zinc-400">
                Your coding milestones and accomplishments
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {totalSolved >= 10 && (
                  <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800">
                    🎯 First 10 Problems
                  </div>
                )}
                {totalSolved >= 50 && (
                  <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800">
                    💪 Half Century
                  </div>
                )}
                {completedSheets > 0 && (
                  <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800">
                    🏆 Sheet Master
                  </div>
                )}
                {overallPercentage >= 50 && (
                  <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800">
                    ⭐ Halfway Hero
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Progress Chart */}
          <Card className="col-span-4 bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                Sheet Progress Overview
              </CardTitle>
              <p className="text-sm text-zinc-400">
                Your progress across different problem sheets
              </p>
            </CardHeader>
            <CardContent>
              {Object.keys(overallProgress).length > 0 ? (
                <>
                  <div className="space-y-4 mb-6">
                    {Object.entries(overallProgress).map(
                      ([sheetName, progress]) => (
                        <div key={sheetName} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-zinc-200">
                              {sheetName}
                            </span>
                            <span className="text-zinc-400">
                              {progress.solved}/{progress.total}
                            </span>
                          </div>
                          {/* Custom Progress Bar */}
                          <div className="relative w-full overflow-hidden rounded-full bg-zinc-800">
                            <div
                              className="h-2 w-full flex-1 bg-zinc-100 transition-all duration-500 ease-out"
                              style={{
                                transform: `translateX(-${
                                  100 - progress.percentage
                                }%)`,
                              }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {progressData.length > 0 && (
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={progressData}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#374151"
                          />
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12, fill: "#9ca3af" }}
                            tickLine={false}
                            axisLine={{ stroke: "#374151" }}
                          />
                          <YAxis
                            tick={{ fontSize: 12, fill: "#9ca3af" }}
                            tickLine={false}
                            axisLine={{ stroke: "#374151" }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#1f2937",
                              border: "1px solid #374151",
                              borderRadius: "6px",
                            }}
                            itemStyle={{ color: "#e5e7eb" }}
                            labelStyle={{ color: "#9ca3af" }}
                            formatter={(value, name) => {
                              const item = progressData.find(
                                (d) => d.solved === value
                              );
                              return `${value}/${item?.total || 0} solved`;
                            }}
                          />
                          <Bar
                            dataKey="solved"
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <Target className="h-12 w-12 text-gray-600 mb-4" />
                  <p className="text-gray-400 mb-4">
                    No progress data available
                  </p>
                  <Link to="/sheets">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Browse Sheets
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Overall Progress Pie Chart */}
            {totalQuestions > 0 && (
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white">
                    Progress Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={70}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#18181b",
                            border: "1px solid #27272a",
                            borderRadius: "6px",
                          }}
                          itemStyle={{ color: "#e4e4e7" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-4 text-sm mt-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500" />
                      <span className="text-zinc-300">
                        Solved ({totalSolved})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-zinc-700" />
                      <span className="text-zinc-300">
                        Remaining ({totalQuestions - totalSolved})
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Actions */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">
                  Quick Actions
                </CardTitle>
                <p className="text-sm text-zinc-400">
                  Jump back into your coding practice
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/sheets" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-between border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:text-white text-zinc-200"
                  >
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Browse All Sheets
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                {Object.keys(overallProgress)
                  .slice(0, 2)
                  .map((sheetName) => (
                    <Link
                      key={sheetName}
                      to={`/sheet/${sheetName}`}
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-between border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:text-white text-zinc-200"
                      >
                        <div className="flex items-center">
                          <Code className="mr-2 h-4 w-4" />
                          Continue {sheetName}
                        </div>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  ))}

                {/* Separator */}
                <div className="my-4 h-px bg-zinc-800" />

                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span>Last active</span>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    Today
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
