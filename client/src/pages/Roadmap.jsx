import React from "react";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import {
  Map,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Brain,
  Code,
  Trophy,
  Star,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Roadmap = () => {
  const navigate = useNavigate();

  const roadmapPhases = [
    {
      id: 1,
      title: "Foundation Phase",
      duration: "4-6 weeks",
      description:
        "Build strong fundamentals in programming and basic data structures",
      topics: [
        "Programming Language Basics (Python/Java/C++)",
        "Time & Space Complexity Analysis",
        "Arrays and Strings",
        "Basic Sorting Algorithms",
        "Linear Search & Binary Search",
      ],
      sheets: ["DSA360 - Basics", "SDE - Arrays"],
      status: "active",
    },
    {
      id: 2,
      title: "Core Data Structures",
      duration: "6-8 weeks",
      description: "Master essential data structures and their applications",
      topics: [
        "Linked Lists (Single, Double, Circular)",
        "Stacks and Queues",
        "Trees (Binary Trees, BST)",
        "Heaps and Priority Queues",
        "Hash Tables and Maps",
      ],
      sheets: ["DSA360 - Data Structures", "Blind75 - Trees"],
      status: "upcoming",
    },
    {
      id: 3,
      title: "Advanced Algorithms",
      duration: "8-10 weeks",
      description: "Learn algorithmic thinking and problem-solving patterns",
      topics: [
        "Recursion and Backtracking",
        "Dynamic Programming",
        "Greedy Algorithms",
        "Graph Algorithms (DFS, BFS)",
        "Two Pointers & Sliding Window",
      ],
      sheets: ["Supreme - DP", "SDE - Graphs"],
      status: "upcoming",
    },
    {
      id: 4,
      title: "Interview Preparation",
      duration: "4-6 weeks",
      description:
        "Focus on interview-specific problems and system design basics",
      topics: [
        "Company-specific Problem Patterns",
        "Mock Interview Practice",
        "System Design Fundamentals",
        "Behavioral Questions",
        "Optimization Techniques",
      ],
      sheets: ["Interview - Top Questions", "Supreme - Advanced"],
      status: "upcoming",
    },
  ];

  const milestones = [
    { problems: 50, title: "First 50 Problems", achieved: true },
    { problems: 100, title: "Century Mark", achieved: false },
    { problems: 250, title: "Quarter Milestone", achieved: false },
    { problems: 500, title: "Half Thousand", achieved: false },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Target className="h-5 w-5 text-zinc-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "border-blue-500 bg-blue-500/10";
      case "completed":
        return "border-green-500 bg-green-500/10";
      default:
        return "border-zinc-700 bg-zinc-900";
    }
  };

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

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
              <Map className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                DSA Learning Roadmap
              </h1>
              <p className="text-zinc-400 mt-1">
                Your structured path to mastering Data Structures & Algorithms
              </p>
            </div>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4 text-center">
                <Brain className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-sm text-zinc-400">Learning Phases</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4 text-center">
                <Code className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">22-30</div>
                <div className="text-sm text-zinc-400">Weeks Total</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-sm text-zinc-400">Practice Sheets</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4 text-center">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-zinc-400">Problems</div>
              </CardContent>
            </Card>
          </div>
        </header>

        {/* Roadmap Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Learning Phases
          </h2>
          <div className="space-y-6">
            {roadmapPhases.map((phase, index) => (
              <Card
                key={phase.id}
                className={`border ${getStatusColor(phase.status)}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(phase.status)}
                      <div>
                        <CardTitle className="text-xl text-white">
                          Phase {phase.id}: {phase.title}
                        </CardTitle>
                        <p className="text-zinc-400 text-sm mt-1">
                          {phase.duration} • {phase.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zinc-500">
                        {phase.status === "active" && "In Progress"}
                        {phase.status === "completed" && "Completed"}
                        {phase.status === "upcoming" && "Upcoming"}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Topics */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Key Topics
                      </h4>
                      <ul className="space-y-2">
                        {phase.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-center space-x-2 text-sm text-zinc-300"
                          >
                            <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommended Sheets */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Recommended Practice
                      </h4>
                      <div className="space-y-2">
                        {phase.sheets.map((sheet, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2 bg-zinc-800/50 rounded-lg"
                          >
                            <span className="text-sm text-zinc-300">
                              {sheet}
                            </span>
                            <ArrowRight className="h-4 w-4 text-zinc-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Achievement Milestones
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className={`border ${
                  milestone.achieved
                    ? "border-green-500 bg-green-500/10"
                    : "border-zinc-700 bg-zinc-900"
                }`}
              >
                <CardContent className="p-4 text-center">
                  {milestone.achieved ? (
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  ) : (
                    <Star className="h-8 w-8 text-zinc-500 mx-auto mb-2" />
                  )}
                  <div className="text-2xl font-bold text-white mb-1">
                    {milestone.problems}
                  </div>
                  <div className="text-sm text-zinc-400">{milestone.title}</div>
                  {milestone.achieved && (
                    <div className="text-xs text-green-500 mt-1">Achieved!</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl text-white">💡 Study Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">
                  Daily Practice
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Solve 2-3 problems daily consistently</li>
                  <li>• Focus on understanding patterns, not memorizing</li>
                  <li>• Review and revisit difficult problems</li>
                  <li>• Time yourself during practice sessions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">
                  Learning Strategy
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Start with easier problems in each topic</li>
                  <li>• Master one data structure before moving to next</li>
                  <li>• Practice implementing from scratch</li>
                  <li>• Join study groups and discuss solutions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;
