import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockTestsData } from "../data/mockTests";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Flag,
  Award,
  RotateCcw,
} from "lucide-react";

const MockTest = () => {
  const { testId, setNumber } = useParams();
  const navigate = useNavigate();

  // Find test data
  const testData = Object.values(mockTestsData).find(
    (test) => test.id === testId
  );
  const testName = Object.keys(mockTestsData).find(
    (name) => mockTestsData[name].id === testId
  );
  const setNum = setNumber.replace("set-", "");
  const questions = testData?.sets[setNum] || [];

  // Test state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [score, setScore] = useState(null);
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isTestCompleted) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isTestCompleted) {
      handleSubmitTest();
    }
  }, [timeLeft, isTestCompleted]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle answer selection
  const handleAnswerSelect = (answerIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answerIndex,
    });
  };

  // Handle question navigation
  const goToQuestion = (questionIndex) => {
    setCurrentQuestion(questionIndex);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Flag/unflag question
  const toggleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestion)) {
      newFlagged.delete(currentQuestion);
    } else {
      newFlagged.add(currentQuestion);
    }
    setFlaggedQuestions(newFlagged);
  };

  // Calculate score and submit test
  const handleSubmitTest = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount++;
      }
    });

    const finalScore = {
      correct: correctCount,
      total: questions.length,
      percentage: Math.round((correctCount / questions.length) * 100),
    };

    setScore(finalScore);
    setIsTestCompleted(true);
  };

  // Restart test
  const handleRestartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setTimeLeft(30 * 60);
    setIsTestCompleted(false);
    setScore(null);
    setFlaggedQuestions(new Set());
  };

  // Return to mock tests page
  const handleBackToTests = () => {
    navigate("/mock-test");
  };

  if (!testData || !questions.length) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Test Not Found</h2>
          <p className="text-zinc-400 mb-4">
            The requested test could not be loaded.
          </p>
          <Button
            onClick={handleBackToTests}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Back to Mock Tests
          </Button>
        </div>
      </div>
    );
  }

  // Score display component
  if (isTestCompleted && score) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-zinc-300" />
                </div>
                <CardTitle className="text-2xl text-white">
                  Test Completed!
                </CardTitle>
                <p className="text-zinc-400">
                  {testName} - Set {setNum}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">
                    {score.percentage}%
                  </div>
                  <p className="text-zinc-400">Your Score</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-zinc-800">
                    <div className="text-2xl font-bold text-green-400">
                      {score.correct}
                    </div>
                    <p className="text-zinc-400 text-sm">Correct</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-zinc-800">
                    <div className="text-2xl font-bold text-red-400">
                      {score.total - score.correct}
                    </div>
                    <p className="text-zinc-400 text-sm">Incorrect</p>
                  </div>
                </div>

                <div className="text-center p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                  <p className="text-zinc-300">
                    {score.percentage >= 80
                      ? "Excellent! "
                      : score.percentage >= 60
                      ? "Good job! "
                      : score.percentage >= 40
                      ? "Keep practicing! "
                      : "Need more preparation! "}
                    You scored {score.correct} out of {score.total} questions
                    correctly.
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={handleRestartTest}
                    className="bg-zinc-700 hover:bg-zinc-600 flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Retake Test
                  </Button>
                  <Button
                    onClick={handleBackToTests}
                    variant="outline"
                    className="border-zinc-500 text-black-300 hover:bg-zinc-300"
                  >
                    Back to Tests
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with timer and progress */}
      <div className="border-b border-zinc-800 bg-zinc-900/50 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToTests}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-white">
                  {testName} - Set {setNum}
                </h1>
                <div className="text-sm text-zinc-400">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                  timeLeft < 300
                    ? "bg-red-900/50 text-red-400"
                    : "bg-zinc-800 text-zinc-300"
                }`}
              >
                <Clock className="h-4 w-4" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
              <Button
                onClick={handleSubmitTest}
                className="bg-green-600 hover:bg-green-700"
              >
                Submit Test
              </Button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full bg-zinc-800 rounded-full h-2">
              <div
                className="bg-zinc-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigation Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-zinc-900 border-zinc-800 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white text-lg">Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 lg:grid-cols-4 gap-2">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors relative ${
                        index === currentQuestion
                          ? "bg-blue-600 text-white"
                          : answers[index] !== undefined
                          ? "bg-green-600 text-white"
                          : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                      }`}
                    >
                      {index + 1}
                      {flaggedQuestions.has(index) && (
                        <Flag className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span className="text-zinc-400">Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-600 rounded"></div>
                    <span className="text-zinc-400">Answered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-zinc-800 rounded"></div>
                    <span className="text-zinc-400">Not Answered</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">
                    Question {currentQuestion + 1}
                  </CardTitle>
                  <button
                    onClick={toggleFlag}
                    className={`p-2 rounded-lg transition-colors ${
                      flaggedQuestions.has(currentQuestion)
                        ? "bg-yellow-600 text-white"
                        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                    }`}
                  >
                    <Flag className="h-4 w-4" />
                  </button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg text-zinc-200 leading-relaxed">
                  {currentQ.question}
                </div>

                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        answers[currentQuestion] === index
                          ? "border-zinc-600 bg-zinc-600/90 text-white"
                          : "border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            answers[currentQuestion] === index
                              ? "border-zinc-100 bg-zinc-500"
                              : "border-zinc-600"
                          }`}
                        >
                          {answers[currentQuestion] === index && (
                            <CheckCircle className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <span className="flex-1">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <Button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                    variant="outline"
                    className="border-zinc-700 text-black-300 hover:bg-zinc-200 disabled:opacity-50"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  <div className="text-sm text-zinc-400">
                    {Object.keys(answers).length} of {questions.length} answered
                  </div>

                  <Button
                    onClick={nextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                    className="bg-zinc-600 hover:bg-zinc-700 disabled:opacity-50"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
