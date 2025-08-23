import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { useAuth } from "../context/AuthContext";
import {
  ArrowRight,
  Code2,
  Target,
  Zap,
  BookOpen,
  Trophy,
  Bot,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Users,
  Star,
  Clock,
} from "lucide-react";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* White gradient at top */}
      <div
        className="absolute top-0 left-0 right-0 h-96 opacity-10 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)",
        }}
      />

      {/* Squared Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Square grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "slowFloat 30s ease-in-out infinite",
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-zinc-800/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-700/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-zinc-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="hero-section container mx-auto px-4 py-20 md:py-32">
          <div className="landing-strokes max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1 text-sm font-medium mb-8">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              AI-Powered DSA Learning Platform
            </div>

            {/* Main Heading */}
            <h1 className="main-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Master DSA with
              <br />
              <span className="text-zinc-400">Smart Learning</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              The ultimate platform for data structures and algorithms mastery.
              Track your progress, solve curated problems, take mock tests, and
              get AI-powered assistance all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    className="min-w-32 bg-white text-black hover:bg-zinc-200"
                  >
                    Open Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button
                    size="lg"
                    className="min-w-32 bg-white text-black hover:bg-zinc-200"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
              <Link to="/sheets">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-32 border-zinc-800 hover:bg-zinc-900 hover:text-white"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Sheets
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-zinc-500">DSA Problems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-zinc-500">Mock Tests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">AI</div>
                <div className="text-sm text-zinc-500">Doubt Solver</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-zinc-500">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-24 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to Excel
              </h2>
              <p className="text-zinc-400 text-lg">
                Comprehensive tools designed to accelerate your DSA learning
                journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    Curated Problem Sheets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-sm">
                    Access expertly curated problem collections including Blind
                    75, DSA 360, SDE, and more popular sheets.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    Progress Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-sm">
                    Visual progress tracking with detailed analytics, completion
                    percentages, and personalized insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    AI Doubt Solver
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-sm">
                    Get instant help with AI-powered explanations, approach
                    suggestions, and step-by-step solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    Mock Tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-sm">
                    Practice with timed mock tests simulating real interview
                    conditions and competitive programming.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    Performance Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-sm">
                    Detailed performance metrics, difficulty-wise breakdowns,
                    and improvement recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    Community Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-sm">
                    Connect with fellow learners, share progress, and learn from
                    the community's collective knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-24 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-zinc-400 text-lg">
                Simple steps to accelerate your DSA learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-white">1</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Choose Your Path
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Select from curated problem sheets like Blind 75, DSA 360, or
                  SDE collections based on your goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-white">2</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Practice & Learn
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Solve problems at your pace, track progress, and get AI
                  assistance whenever you're stuck.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-white">3</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Master & Excel
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Take mock tests, analyze performance, and achieve your coding
                  interview and competitive programming goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-24 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Choose Our Platform?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Comprehensive Coverage
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        All essential DSA topics covered with varying difficulty
                        levels to match your learning pace.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                      <Zap className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        AI-Powered Learning
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Get instant help and personalized explanations powered
                        by advanced AI technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                      <Trophy className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Interview Ready
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Practice with real interview questions and mock tests to
                        boost your confidence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                      <Clock className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Progress Tracking
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Visual progress tracking with detailed analytics to
                        monitor your improvement over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-16">
                <Card className="bg-zinc-900 border-zinc-800 p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Join 100+ Developers
                    </h3>
                    <p className="text-zinc-400 mb-6">
                      Already mastering DSA with our platform
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">95%</div>
                        <div className="text-sm text-zinc-500">
                          Success Rate
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          4.9★
                        </div>
                        <div className="text-sm text-zinc-500">User Rating</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-24 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Join thousands of developers who are already mastering DSA with
              our comprehensive platform.
            </p>

            {!isAuthenticated && (
              <Link to="/login">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}

            <div className="mt-6">
              <p className="text-zinc-500 text-sm">
                Free forever • No credit card required • Start in seconds
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slowFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(0.5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
