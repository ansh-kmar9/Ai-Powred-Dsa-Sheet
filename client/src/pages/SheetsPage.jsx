import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import {
  BookOpen,
  Code,
  Brain,
  Zap,
  Star,
  Target,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const SheetsPage = () => {
  const navigate = useNavigate();

  // Static sheet data
  const sheets = [
    {
      name: "DSA360",
      description:
        "Complete DSA preparation covering all essential topics from basics to advanced level.",
      totalQuestions: 450,
      icon: Brain,
      difficulty: "Beginner to Advanced",
    },
    {
      name: "SDE",
      description:
        "Software Development Engineer interview preparation with curated problems from top tech companies.",
      totalQuestions: 200,
      icon: Code,
      difficulty: "Intermediate",
    },
    {
      name: "Blind75",
      description:
        "75 must-solve coding problems that cover the most important patterns for technical interviews.",
      totalQuestions: 75,
      icon: Target,
      difficulty: "Intermediate",
    },
    {
      name: "Interview",
      description:
        "Essential coding interview questions with detailed solutions and explanations for better understanding.",
      totalQuestions: 150,
      icon: Zap,
      color: "from-orange-500 to-orange-600",
      difficulty: "Beginner to Intermediate",
    },
    {
      name: "Supreme",
      description:
        "Advanced level problems for competitive programming and senior developer positions preparation.",
      totalQuestions: 300,
      icon: Star,
      color: "from-red-500 to-red-600",
      difficulty: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Go Back Button */}
      <div className="container mx-auto px-10 pt-8">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="flex items-center space-x-2 text-zinc-400 hover:text-white hover:bg-zinc-800 p-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Go Back</span>
        </Button>
      </div>

      {/* Sheets Section */}
      <section className="container mx-auto px-4 py-10 border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Sheets
            </h2>
            <p className="text-zinc-400 text-lg">
              Start with these carefully selected problem collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sheets.map((sheet) => {
              const IconComponent = sheet.icon;

              return (
                <Card
                  key={sheet.name}
                  className="bg-zinc-900 border-zinc-800 p-6 hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {sheet.name}
                        </h3>
                        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                          {sheet.totalQuestions} problems
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500 px-2 py-1 border border-zinc-700 rounded">
                      {sheet.difficulty}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    {sheet.description}
                  </p>

                  <Link to={`/sheet/${sheet.name}`}>
                    <Button className="w-full bg-white text-black hover:bg-zinc-200">
                      Start Practicing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="container mx-auto px-4 py-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {sheets.length}
              </div>
              <div className="text-sm text-zinc-500">Sheets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {sheets.reduce((sum, sheet) => sum + sheet.totalQuestions, 0)}
              </div>
              <div className="text-sm text-zinc-500">Problems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-sm text-zinc-500">Levels</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SheetsPage;
