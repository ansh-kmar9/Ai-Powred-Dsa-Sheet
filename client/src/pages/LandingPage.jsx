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
            <h1 className="main-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-center text-white">
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
                <div className="text-xl sm:text-2xl font-bold text-white">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-zinc-500">
                  DSA Problems
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-zinc-500">
                  Mock Tests
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  AI
                </div>
                <div className="text-xs sm:text-sm text-zinc-500">
                  Doubt Solver
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  24/7
                </div>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    1
                  </div>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    2
                  </div>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    3
                  </div>
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
                        <div className="text-xl sm:text-2xl font-bold text-white">
                          95%
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-500">
                          Success Rate
                        </div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white">
                          4.9★
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-500">
                          User Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-2 sm:px-3 lg:px-4 py-16 sm:py-20 md:py-24 border-t border-zinc-800 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                What Our Family Say
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg px-4 sm:px-0">
                Hear from our users who transformed their careers with our
                platform
              </p>
            </div>

            {/* First Row - Left to Right */}
            <div className="relative mb-6 overflow-hidden testimonials-container">
              {/* Left fog effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              {/* Right fog effect */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

              <div className="flex animate-scroll-left-smooth">
                {/* First set of testimonials */}
                <div className="flex space-x-4 flex-shrink-0">
                  {[
                    {
                      name: "Abhinay Yadav",
                      occupation: "Student",
                      content:
                        "DSA Sheet has been a game changer for my preparation. The structured problems boosted my confidence.",
                    },
                    {
                      name: "Abhishek Kumar",
                      occupation: "Full Stack Developer",
                      content:
                        "Practicing daily from dsasheet.site improved my problem-solving speed drastically.",
                    },
                    {
                      name: "Akash Kumar",
                      occupation: "SDE at FarePortal",
                      content:
                        "I finally understood core DSA concepts clearly thanks to the organized approach here.",
                    },
                    {
                      name: "Pawas Ranjan",
                      occupation: "Student",
                      content:
                        "The step-by-step guidance made even tough topics simple to grasp.",
                    },
                    {
                      name: "Rohan Singh",
                      occupation: "Student",
                      content:
                        "This sheet helped me stay consistent and track my progress easily.",
                    },
                    {
                      name: "Harsh Kumar",
                      occupation: "Student",
                      content:
                        "One of the best resources for coding interview preparation. Totally worth it.",
                    },
                    {
                      name: "Ashwani Day",
                      occupation: "Backend Developer GoComet",
                      content:
                        "This platform gave me the discipline to practice regularly and crack tough interview questions.",
                    },
                    {
                      name: "Abhishek Kumar",
                      occupation: "Analyst at Play Simple Games",
                      content:
                        "With this sheet, I was able to complete a full revision before my placement drive.",
                    },
                    {
                      name: "Ananya Sharma",
                      occupation: "Student",
                      content:
                        "The practice problems and notes gave me clarity and speed in solving DSA questions.",
                    },
                    {
                      name: "Priyanka Verma",
                      occupation: "Student",
                      content:
                        "DSAsheet made my preparation smooth and systematic. Highly recommended!",
                    },
                    {
                      name: "Neha Gupta",
                      occupation: "Student",
                      content:
                        "I loved how the sheet covers all important patterns with detailed guidance.",
                    },
                    {
                      name: "Kritika Singh",
                      occupation: "Student",
                      content:
                        "A perfect companion for anyone starting with Data Structures and Algorithms.",
                    },
                    {
                      name: "Sahbaz Alam",
                      occupation: "Student",
                      content:
                        "The structured problem sets made it easier for me to build confidence and improve my coding consistency.",
                    },
                    {
                      name: "Purushotam Jeswani",
                      occupation: "Full Stack Developer",
                      content:
                        "This sheet refined my problem-solving skills and gave me clarity across different DSA concepts.",
                    },
                    {
                      name: "Priya Jha",
                      occupation:
                        "Packaged App Development Analyst at Accenture",
                      content:
                        "Great place for tracking your progress and prep alongside.",
                    },
                    {
                      name: "Rishav Rao",
                      occupation: "Data Analyst",
                      content:
                        "A very helpful resource that keeps preparation structured and motivates me to stay consistent.",
                    },
                  ].map((testimonial, index) => (
                    <Card
                      key={index}
                      className="bg-zinc-900/80 border-zinc-800/60 backdrop-blur-sm flex-shrink-0 w-64"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-medium text-sm">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-white text-sm truncate">
                              {testimonial.name}
                            </h4>
                            <p className="text-zinc-400 text-xs leading-tight">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 text-yellow-400 fill-current mr-0.5"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {/* Multiple duplicates for truly seamless scroll */}
                <div className="flex space-x-4 flex-shrink-0 ml-4">
                  {[
                    {
                      name: "Abhinay Yadav",
                      occupation: "Student",
                      content:
                        "DSA Sheet has been a game changer for my preparation. The structured problems boosted my confidence.",
                    },
                    {
                      name: "Abhishek Kumar",
                      occupation: "Student",
                      content:
                        "Practicing daily from dsasheet.site improved my problem-solving speed drastically.",
                    },
                    {
                      name: "Akash Kumar",
                      occupation: "SDE at FarePortal",
                      content:
                        "I finally understood core DSA concepts clearly thanks to the organized approach here.",
                    },
                    {
                      name: "Pawas Ranjan",
                      occupation: "Student",
                      content:
                        "The step-by-step guidance made even tough topics simple to grasp.",
                    },
                    {
                      name: "Rohan Singh",
                      occupation: "Student",
                      content:
                        "This sheet helped me stay consistent and track my progress easily.",
                    },
                    {
                      name: "Harsh Kumar",
                      occupation: "Student",
                      content:
                        "One of the best resources for coding interview preparation. Totally worth it.",
                    },
                    {
                      name: "Ashwani Day",
                      occupation: "Backend Developer GoComet",
                      content:
                        "This platform gave me the discipline to practice regularly and crack tough interview questions.",
                    },
                    {
                      name: "Abhishek Kumar",
                      occupation: "Analyst at Play Simple Games",
                      content:
                        "With this sheet, I was able to complete a full revision before my placement drive.",
                    },
                    {
                      name: "Ananya Sharma",
                      occupation: "Student",
                      content:
                        "The practice problems and notes gave me clarity and speed in solving DSA questions.",
                    },
                    {
                      name: "Priyanka Verma",
                      occupation: "Student",
                      content:
                        "DSAsheet made my preparation smooth and systematic. Highly recommended!",
                    },
                    {
                      name: "Neha Gupta",
                      occupation: "Student",
                      content:
                        "I loved how the sheet covers all important patterns with detailed guidance.",
                    },
                    {
                      name: "Kritika Singh",
                      occupation: "Student",
                      content:
                        "A perfect companion for anyone starting with Data Structures and Algorithms.",
                    },
                    {
                      name: "Sahbaz Alam",
                      occupation: "Student",
                      content:
                        "The structured problem sets made it easier for me to build confidence and improve my coding consistency.",
                    },
                    {
                      name: "Purushotam Jeswani",
                      occupation: "Full Stack Developer",
                      content:
                        "This sheet refined my problem-solving skills and gave me clarity across different DSA concepts.",
                    },
                    {
                      name: "Priya Jha",
                      occupation:
                        "Packaged App Development Analyst at Accenture",
                      content:
                        "Great place for tracking your progress and prep alongside.",
                    },
                    {
                      name: "Rishav Rao",
                      occupation: "Data Analyst",
                      content:
                        "A very helpful resource that keeps preparation structured and motivates me to stay consistent.",
                    },
                  ].map((testimonial, index) => (
                    <Card
                      key={`dup-${index}`}
                      className="bg-zinc-900/80 border-zinc-800/60 backdrop-blur-sm flex-shrink-0 w-64"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-medium text-sm">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-white text-sm truncate">
                              {testimonial.name}
                            </h4>
                            <p className="text-zinc-400 text-xs leading-tight">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 text-yellow-400 fill-current mr-0.5"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex space-x-4 flex-shrink-0 ml-4">
                  {[
                    {
                      name: "Abhinay Yadav",
                      occupation: "Student",
                      content:
                        "DSA Sheet has been a game changer for my preparation. The structured problems boosted my confidence.",
                    },
                    {
                      name: "Abhishek Kumar",
                      occupation: "Student",
                      content:
                        "Practicing daily from dsasheet.site improved my problem-solving speed drastically.",
                    },
                    {
                      name: "Akash Kumar",
                      occupation: "SDE at FarePortal",
                      content:
                        "I finally understood core DSA concepts clearly thanks to the organized approach here.",
                    },
                    {
                      name: "Pawas Ranjan",
                      occupation: "Student",
                      content:
                        "The step-by-step guidance made even tough topics simple to grasp.",
                    },
                    {
                      name: "Rohan Singh",
                      occupation: "Student",
                      content:
                        "This sheet helped me stay consistent and track my progress easily.",
                    },
                    {
                      name: "Harsh Kumar",
                      occupation: "Student",
                      content:
                        "One of the best resources for coding interview preparation. Totally worth it.",
                    },
                    {
                      name: "Ashwani Day",
                      occupation: "Backend Developer GoComet",
                      content:
                        "This platform gave me the discipline to practice regularly and crack tough interview questions.",
                    },
                    {
                      name: "Abhishek Kumar",
                      occupation: "Analyst at Play Simple Games",
                      content:
                        "With this sheet, I was able to complete a full revision before my placement drive.",
                    },
                    {
                      name: "Ananya Sharma",
                      occupation: "Student",
                      content:
                        "The practice problems and notes gave me clarity and speed in solving DSA questions.",
                    },
                    {
                      name: "Priyanka Verma",
                      occupation: "Student",
                      content:
                        "DSAsheet made my preparation smooth and systematic. Highly recommended!",
                    },
                    {
                      name: "Neha Gupta",
                      occupation: "Student",
                      content:
                        "I loved how the sheet covers all important patterns with detailed guidance.",
                    },
                    {
                      name: "Kritika Singh",
                      occupation: "Student",
                      content:
                        "A perfect companion for anyone starting with Data Structures and Algorithms.",
                    },
                    {
                      name: "Sahbaz Alam",
                      occupation: "Student",
                      content:
                        "The structured problem sets made it easier for me to build confidence and improve my coding consistency.",
                    },
                    {
                      name: "Purushotam Jeswani",
                      occupation: "Full Stack Developer",
                      content:
                        "This sheet refined my problem-solving skills and gave me clarity across different DSA concepts.",
                    },
                    {
                      name: "Priya Jha",
                      occupation:
                        "Packaged App Development Analyst at Accenture",
                      content:
                        "Great place for tracking your progress and prep alongside.",
                    },
                    {
                      name: "Rishav Rao",
                      occupation: "Data Analyst",
                      content:
                        "A very helpful resource that keeps preparation structured and motivates me to stay consistent.",
                    },
                  ].map((testimonial, index) => (
                    <Card
                      key={`dup2-${index}`}
                      className="bg-zinc-900/80 border-zinc-800/60 backdrop-blur-sm flex-shrink-0 w-64"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-medium text-sm">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-white text-sm truncate">
                              {testimonial.name}
                            </h4>
                            <p className="text-zinc-400 text-xs leading-tight">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 text-yellow-400 fill-current mr-0.5"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative overflow-hidden testimonials-container">
              {/* Left fog effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              {/* Right fog effect */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

              <div className="flex animate-scroll-right-smooth">
                {/* Second set of testimonials */}
                <div className="flex space-x-4 flex-shrink-0">
                  {[
                    {
                      name: "Rahul Mehta",
                      occupation: "Software Engineer at TCS",
                      content:
                        "This sheet gave me the confidence to crack tough DSA rounds during my interviews.",
                    },
                    {
                      name: "Sneha Patel",
                      occupation: "Student",
                      content:
                        "Daily practice with dsasheet.site improved both my accuracy and speed in solving problems.",
                    },
                    {
                      name: "Vikash Raj",
                      occupation: "Student",
                      content:
                        "Earlier I was scared of DSA, but the structured plan here made it manageable and fun.",
                    },
                    {
                      name: "Pooja Singh",
                      occupation: "MERN Stack Developer",
                      content:
                        "The progressive problem sets helped me build a strong base.",
                    },
                    {
                      name: "Aditya Sharma",
                      occupation: "Student",
                      content:
                        "From arrays to dynamic programming, this sheet made concepts crystal clear.",
                    },
                    {
                      name: "Saurabh Yadav",
                      occupation: "Frontend Developer at Infosys",
                      content:
                        "Practicing here boosted my confidence in real-world technical interviews.",
                    },
                    {
                      name: "Ishita Roy",
                      occupation: "Student",
                      content:
                        "The roadmap helped me stay consistent and finish DSA preparation on time.",
                    },
                    {
                      name: "Ravi Prakash",
                      occupation: "Student",
                      content:
                        "I cracked my campus placement test thanks to this sheet's structured approach.",
                    },
                    {
                      name: "Tanya Gupta",
                      occupation: "Student",
                      content:
                        "The sheet kept me consistent and gave me the confidence to tackle coding challenges step by step.",
                    },
                    {
                      name: "Deepak Kumar",
                      occupation: "Software Engineer Intern",
                      content:
                        "This resource gave me the discipline I needed to stay on track daily.",
                    },
                    {
                      name: "Ankit Verma",
                      occupation: "Student",
                      content:
                        "I finally understood recursion and dynamic programming after following this sheet.",
                    },
                    {
                      name: "Shivani Mishra",
                      occupation: "Student",
                      content:
                        "The systematic topic coverage and well-chosen problems made learning DSA enjoyable.",
                    },
                    {
                      name: "Ramesh Chauhan",
                      occupation: "Student",
                      content:
                        "Solved over 300 problems with this sheet—my logic-building improved a lot.",
                    },
                    {
                      name: "Manisha Kumari",
                      occupation: "Data Analyst Intern",
                      content:
                        "DSA sheet gave me both practice and confidence before my technical rounds.",
                    },
                    {
                      name: "Kunal Singh",
                      occupation: "Student",
                      content:
                        "I could easily track my progress and fill gaps in my DSA preparation.",
                    },
                  ].map((testimonial, index) => (
                    <Card
                      key={index}
                      className="bg-zinc-900/80 border-zinc-800/60 backdrop-blur-sm flex-shrink-0 w-64"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-medium text-sm">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-white text-sm truncate">
                              {testimonial.name}
                            </h4>
                            <p className="text-zinc-400 text-xs leading-tight">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 text-yellow-400 fill-current mr-0.5"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {/* Multiple duplicates for truly seamless scroll */}
                <div className="flex space-x-4 flex-shrink-0 ml-4">
                  {[
                    {
                      name: "Rahul Mehta",
                      occupation: "Software Engineer at TCS",
                      content:
                        "This sheet gave me the confidence to crack tough DSA rounds during my interviews.",
                    },
                    {
                      name: "Sneha Patel",
                      occupation: "Student",
                      content:
                        "Daily practice with dsasheet.site improved both my accuracy and speed in solving problems.",
                    },
                    {
                      name: "Vikash Raj",
                      occupation: "Student",
                      content:
                        "Earlier I was scared of DSA, but the structured plan here made it manageable and fun.",
                    },
                    {
                      name: "Pooja Singh",
                      occupation: "MERN Stack Developer",
                      content:
                        "The clear explanations and progressive problem sets helped me build a strong base.",
                    },
                    {
                      name: "Aditya Sharma",
                      occupation: "Student",
                      content:
                        "From arrays to dynamic programming, this sheet made concepts crystal clear.",
                    },
                    {
                      name: "Saurabh Yadav",
                      occupation: "Frontend Developer at Infosys",
                      content:
                        "Practicing here boosted my confidence in real-world technical interviews.",
                    },
                    {
                      name: "Ishita Roy",
                      occupation: "Student",
                      content:
                        "The roadmap helped me stay consistent and finish DSA preparation on time.",
                    },
                    {
                      name: "Ravi Prakash",
                      occupation: "Student",
                      content:
                        "I cracked my campus placement test thanks to this sheet's structured approach.",
                    },
                    {
                      name: "Tanya Gupta",
                      occupation: "Student",
                      content:
                        "The sheet kept me consistent and gave me the confidence to tackle coding challenges step by step.",
                    },
                    {
                      name: "Deepak Kumar",
                      occupation: "Software Engineer Intern",
                      content:
                        "This resource gave me the discipline I needed to stay on track daily.",
                    },
                    {
                      name: "Ankit Verma",
                      occupation: "Student",
                      content:
                        "I finally understood recursion and dynamic programming after following this sheet.",
                    },
                    {
                      name: "Shivani Mishra",
                      occupation: "Student",
                      content:
                        "The systematic topic coverage and well-chosen problems made learning DSA enjoyable.",
                    },
                    {
                      name: "Ramesh Chauhan",
                      occupation: "Student",
                      content:
                        "Solved over 300 problems with this sheet—my logic-building improved a lot.",
                    },
                    {
                      name: "Manisha Kumari",
                      occupation: "Data Analyst Intern",
                      content:
                        "DSA sheet gave me both practice and confidence before my technical rounds.",
                    },
                    {
                      name: "Kunal Singh",
                      occupation: "Student",
                      content:
                        "I could easily track my progress and fill gaps in my DSA preparation.",
                    },
                  ].map((testimonial, index) => (
                    <Card
                      key={`dup-${index}`}
                      className="bg-zinc-900/80 border-zinc-800/60 backdrop-blur-sm flex-shrink-0 w-64"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-medium text-sm">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-white text-sm truncate">
                              {testimonial.name}
                            </h4>
                            <p className="text-zinc-400 text-xs leading-tight">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 text-yellow-400 fill-current mr-0.5"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex space-x-4 flex-shrink-0 ml-4">
                  {[
                    {
                      name: "Rahul Mehta",
                      occupation: "Software Engineer at TCS",
                      content:
                        "This sheet gave me the confidence to crack tough DSA rounds during my interviews.",
                    },
                    {
                      name: "Sneha Patel",
                      occupation: "Student",
                      content:
                        "Daily practice with dsasheet.site improved both my accuracy and speed in solving problems.",
                    },
                    {
                      name: "Vikash Raj",
                      occupation: "Student",
                      content:
                        "Earlier I was scared of DSA, but the structured plan here made it manageable and fun.",
                    },
                    {
                      name: "Pooja Singh",
                      occupation: "MERN Stack Developer",
                      content:
                        "The clear explanations and progressive problem sets helped me build a strong base.",
                    },
                    {
                      name: "Aditya Sharma",
                      occupation: "Student",
                      content:
                        "From arrays to dynamic programming, this sheet made concepts crystal clear.",
                    },
                    {
                      name: "Saurabh Yadav",
                      occupation: "Frontend Developer at Infosys",
                      content:
                        "Practicing here boosted my confidence in real-world technical interviews.",
                    },
                    {
                      name: "Ishita Roy",
                      occupation: "Student",
                      content:
                        "The roadmap helped me stay consistent and finish DSA preparation on time.",
                    },
                    {
                      name: "Ravi Prakash",
                      occupation: "Student",
                      content:
                        "I cracked my campus placement test thanks to this sheet's structured approach.",
                    },
                    {
                      name: "Tanya Gupta",
                      occupation: "Student",
                      content:
                        "The sheet kept me consistent and gave me the confidence to tackle coding challenges step by step.",
                    },
                    {
                      name: "Deepak Kumar",
                      occupation: "Software Engineer Intern",
                      content:
                        "This resource gave me the discipline I needed to stay on track daily.",
                    },
                    {
                      name: "Ankit Verma",
                      occupation: "Student",
                      content:
                        "I finally understood recursion and dynamic programming after following this sheet.",
                    },
                    {
                      name: "Shivani Mishra",
                      occupation: "Student",
                      content:
                        "The systematic topic coverage and well-chosen problems made learning DSA enjoyable.",
                    },
                    {
                      name: "Ramesh Chauhan",
                      occupation: "Student",
                      content:
                        "Solved over 300 problems with this sheet—my logic-building improved a lot.",
                    },
                    {
                      name: "Manisha Kumari",
                      occupation: "Data Analyst Intern",
                      content:
                        "DSA sheet gave me both practice and confidence before my technical rounds.",
                    },
                    {
                      name: "Kunal Singh",
                      occupation: "Student",
                      content:
                        "I could easily track my progress and fill gaps in my DSA preparation.",
                    },
                  ].map((testimonial, index) => (
                    <Card
                      key={`dup2-${index}`}
                      className="bg-zinc-900/80 border-zinc-800/60 backdrop-blur-sm flex-shrink-0 w-64"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-medium text-sm">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-white text-sm truncate">
                              {testimonial.name}
                            </h4>
                            <p className="text-zinc-400 text-xs leading-tight">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 text-yellow-400 fill-current mr-0.5"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
              Join Hundreds of developers who are already mastering DSA with our
              comprehensive platform.
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
                Free forever • Start in seconds
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        /* Responsive adjustments for very small devices */
        @media (max-width: 360px) {
          .main-heading {
            font-size: 1.75rem;
          }
        }

        /* Ultra Smooth Infinite Scroll Animations */
        @keyframes scroll-left-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-272px * 16));
          }
        }

        @keyframes scroll-right-smooth {
          0% {
            transform: translateX(calc(-272px * 15));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left-smooth {
          animation: scroll-left-smooth 60s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .animate-scroll-right-smooth {
          animation: scroll-right-smooth 60s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Enhanced performance optimizations */
        .testimonials-container {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
