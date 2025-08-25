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
      {/* Lightning Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Lightning Path 1 */}
          <path
            className="lightning-stroke"
            d="M 100 0 L 150 200 L 120 220 L 180 400 L 160 420 L 200 600"
            stroke="url(#lightning-gradient-1)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Lightning Path 2 */}
          <path
            className="lightning-stroke"
            d="M 1820 0 L 1780 180 L 1810 200 L 1750 380 L 1770 400 L 1720 580"
            stroke="url(#lightning-gradient-2)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Lightning Path 3 - Mobile visible */}
          <path
            className="lightning-stroke"
            d="M 960 0 L 940 150 L 980 170 L 920 320 L 940 340 L 900 490"
            stroke="url(#lightning-gradient-3)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="lightning-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lightning-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lightning-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* White gradient at top */}
      <div
        className="absolute top-0 left-0 right-0 h-64 sm:h-80 md:h-96 opacity-10 z-0"
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

        {/* Floating orbs - Responsive sizes */}
        <div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-zinc-800/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-zinc-700/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-zinc-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="hero-section container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-24 lg:py-32">
          <div className="landing-strokes max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-lg bg-zinc-900 border border-zinc-800 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500 rounded-full mr-1.5 sm:mr-2 animate-pulse" />
              AI-Powered DSA Learning Platform
            </div>

            {/* Main Heading */}
            <h1 className="main-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Master DSA with
              <br />
              <span className="text-zinc-400">Smart Learning</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              The ultimate platform for data structures and algorithms mastery.
              Track your progress, solve curated problems, take mock tests, and
              get AI-powered assistance all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
              {isAuthenticated ? (
                <Link to="/dashboard" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-w-[140px] sm:min-w-32 bg-white text-black hover:bg-zinc-200 text-sm sm:text-base"
                  >
                    Open Dashboard
                    <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              ) : (
                <Link to="/login" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-w-[140px] sm:min-w-32 bg-white text-black hover:bg-zinc-200 text-sm sm:text-base"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              )}
              <Link to="/sheets" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-w-[140px] sm:min-w-32 border-zinc-800 hover:bg-zinc-900 hover:text-white text-sm sm:text-base"
                >
                  <BookOpen className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Explore Sheets
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">1000+</div>
                <div className="text-xs sm:text-sm text-zinc-500">DSA Problems</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-zinc-500">Mock Tests</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">AI</div>
                <div className="text-xs sm:text-sm text-zinc-500">Doubt Solver</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-zinc-500">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Everything You Need to Excel
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg px-4 sm:px-0">
                Comprehensive tools designed to accelerate your DSA learning
                journey
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Feature Cards */}
              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white">
                    Curated Problem Sheets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Access expertly curated problem collections including Blind
                    75, DSA 360, SDE, and more popular sheets.
                  </p>
                </CardContent>
              </Card>

                            <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white">
                    Progress Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Visual progress tracking with detailed analytics, completion
                    percentages, and personalized insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white">
                    AI Doubt Solver
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Get instant help with AI-powered explanations, approach
                    suggestions, and step-by-step solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white">
                    Mock Tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Practice with timed mock tests simulating real interview
                    conditions and competitive programming.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white">
                    Performance Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Detailed performance metrics, difficulty-wise breakdowns,
                    and improvement recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white">
                    Community Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Connect with fellow learners, share progress, and learn from
                    the community's collective knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                How It Works
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg px-4 sm:px-0">
                Simple steps to accelerate your DSA learning
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 md:gap-12">
              <div className="text-center px-4 sm:px-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="text-xl sm:text-2xl font-bold text-white">1</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Choose Your Path
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Select from curated problem sheets like Blind 75, DSA 360, or
                  SDE collections based on your goals.
                </p>
              </div>

              <div className="text-center px-4 sm:px-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="text-xl sm:text-2xl font-bold text-white">2</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Practice & Learn
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Solve problems at your pace, track progress, and get AI
                  assistance whenever you're stuck.
                </p>
              </div>

              <div className="text-center px-4 sm:px-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="text-xl sm:text-2xl font-bold text-white">3</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Master & Excel
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Take mock tests, analyze performance, and achieve your coding
                  interview and competitive programming goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                  Why Choose Our Platform?
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                        Comprehensive Coverage
                      </h4>
                      <p className="text-zinc-400 text-xs sm:text-sm">
                        All essential DSA topics covered with varying difficulty
                        levels to match your learning pace.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                        AI-Powered Learning
                      </h4>
                      <p className="text-zinc-400 text-xs sm:text-sm">
                        Get instant help and personalized explanations powered
                        by advanced AI technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                      <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                        Interview Ready
                      </h4>
                      <p className="text-zinc-400 text-xs sm:text-sm">
                        Practice with real interview questions and mock tests to
                        boost your confidence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                        Progress Tracking
                      </h4>
                      <p className="text-zinc-400 text-xs sm:text-sm">
                        Visual progress tracking with detailed analytics to
                        monitor your improvement over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:pl-8 xl:pl-16">
                <Card className="bg-zinc-900 border-zinc-800 p-6 sm:p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      Join 100+ Developers
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base mb-4 sm:mb-6">
                      Already mastering DSA with our platform
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white">95%</div>
                                                <div className="text-xs sm:text-sm text-zinc-500">
                          Success Rate
                        </div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white">
                          4.9★
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-500">User Rating</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
              Ready to Start Your Journey?
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-6 sm:mb-8 px-4 sm:px-0">
              Join thousands of developers who are already mastering DSA with
              our comprehensive platform.
            </p>

            {!isAuthenticated && (
              <Link to="/login" className="inline-block px-4 sm:px-0">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 text-sm sm:text-base px-6 sm:px-8"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </Link>
            )}

            <div className="mt-4 sm:mt-6">
              <p className="text-zinc-500 text-xs sm:text-sm px-4 sm:px-0">
                Free forever • No credit card required • Start in seconds
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CSS Animation with Lightning */}
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

        @keyframes lightning-flash {
          0%, 90% {
            opacity: 0;
          }
          91% {
            opacity: 0.8;
          }
          92% {
            opacity: 0.2;
          }
          93% {
            opacity: 0.9;
          }
          94% {
            opacity: 0.1;
          }
          95% {
            opacity: 0.7;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes lightning-glow {
          0%, 90% {
            filter: blur(0px) brightness(1);
          }
          91% {
            filter: blur(2px) brightness(2);
          }
          93% {
            filter: blur(3px) brightness(2.5);
          }
          95% {
            filter: blur(2px) brightness(1.8);
          }
          100% {
            filter: blur(0px) brightness(1);
          }
        }

        .lightning-stroke {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: 
            lightning-draw 0.5s ease-out forwards,
            lightning-flash 8s infinite,
            lightning-glow 8s infinite;
        }

        .lightning-stroke:nth-child(1) {
          animation-delay: 0s, 2s, 2s;
        }

        .lightning-stroke:nth-child(2) {
          animation-delay: 0.2s, 5s, 5s;
        }

        .lightning-stroke:nth-child(3) {
          animation-delay: 0.4s, 7s, 7s;
        }

        @keyframes lightning-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Responsive adjustments for very small devices */
        @media (max-width: 360px) {
          .main-heading {
            font-size: 1.75rem;
          }
        }

        /* Hide third lightning stroke on mobile for performance */
        @media (max-width: 640px) {
          .lightning-stroke:nth-child(3) {
            display: none;
          }
        }

        /* Adjust lightning position for tablets */
        @media (min-width: 768px) and (max-width: 1024px) {
          .lightning-stroke {
            stroke-width: 1.5;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;