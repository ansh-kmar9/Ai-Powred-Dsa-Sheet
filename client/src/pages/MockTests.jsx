import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockTestsData } from "../data/mockTests";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import {
  Monitor,
  Database,
  Code,
  Coffee,
  Globe,
  Calculator,
  Brain,
  Clock,
  Users,
  Award,
  X,
  Play,
  FileText,
  Timer,
  CheckCircle,
} from "lucide-react";

// Icon mapping
const iconComponents = {
  Monitor,
  Database,
  Code,
  Coffee,
  Globe,
  Calculator,
  Brain,
};

const MockTests = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTestClick = (testName, testData) => {
    setSelectedTest({ name: testName, data: testData });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTest(null);
  };

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showModal) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-zinc-300" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Mock Tests
              </h1>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed px-4">
              Test your knowledge with our comprehensive mock tests designed for
              interviews and placements
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="p-2 sm:p-3 rounded-lg bg-zinc-800">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-300" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {Object.keys(mockTestsData).length}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base">Test Categories</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="p-2 sm:p-3 rounded-lg bg-zinc-800">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-300" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">30</h3>
              <p className="text-zinc-400 text-sm sm:text-base">Minutes per Test</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors sm:col-span-1 col-span-1">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="p-2 sm:p-3 rounded-lg bg-zinc-800">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-300" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">20</h3>
              <p className="text-zinc-400 text-sm sm:text-base">Questions per Set</p>
            </CardContent>
          </Card>
        </div>

        {/* Mock Tests Grid */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 mb-6">
            <Brain className="h-5 w-5 text-zinc-300" />
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Available Test Categories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(mockTestsData).map(([testName, testData]) => {
              const IconComponent = iconComponents[testData.icon] || Code;
              const setsCount = Object.keys(testData.sets).length;
              
              return (
                <Card
                  key={testData.id}
                  className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-all duration-200 cursor-pointer group"
                  onClick={() => handleTestClick(testName, testData)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-start gap-3 text-white">
                      <div className="p-2 sm:p-3 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors flex-shrink-0">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold leading-tight break-words">
                          {testName}
                        </h3>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-zinc-400 mb-4 text-sm sm:text-base leading-relaxed">
                      {testData.description}
                    </p>
                    
                    <div className="space-y-3">
                      {/* Test Info */}
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-zinc-500">
                          <FileText className="h-3 w-3" />
                          <span>{setsCount} Set{setsCount !== 1 ? 's' : ''} Available</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500">
                          <CheckCircle className="h-3 w-3" />
                          <span>20 Questions each</span>
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
                        <Timer className="h-3 w-3" />
                        <span>30 minutes duration</span>
                      </div>
                      
                      {/* Action Hint */}
                      <div className="pt-2 border-t border-zinc-800">
                        <p className="text-xs text-zinc-600 text-center group-hover:text-zinc-500 transition-colors">
                          Click to select test set →
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal for Set Selection */}
      {showModal && selectedTest && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-lg max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-800">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="p-2 rounded-lg bg-zinc-800 flex-shrink-0">
                  {React.createElement(
                    iconComponents[selectedTest.data.icon] || Code,
                    {
                      className: "h-4 w-4 sm:h-5 sm:w-5 text-zinc-300",
                    }
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
                  {selectedTest.name}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-zinc-400 hover:text-white transition-colors p-1 -mr-1 flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
              <p className="text-zinc-400 mb-6 text-sm sm:text-base leading-relaxed">
                {selectedTest.data.description}
              </p>

              {/* Set Selection */}
              <div className="space-y-4">
                <h3 className="text-sm sm:text-base font-medium text-zinc-300 mb-4">
                  Select a Set to Begin:
                </h3>
                
                <div className="space-y-3">
                  {Object.keys(selectedTest.data.sets).map((setNumber) => (
                    <Link
                      key={setNumber}
                      to={`/mock-test/${selectedTest.data.id}/set-${setNumber}`}
                      onClick={closeModal}
                      className="block"
                    >
                      <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className="p-2 rounded-lg bg-zinc-700 group-hover:bg-zinc-600 transition-colors flex-shrink-0">
                            <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-white text-sm sm:text-base">
                              Set {setNumber}
                            </h4>
                            <p className="text-xs sm:text-sm text-zinc-400">
                              20 Questions • 30 Minutes
                            </p>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors flex-shrink-0 ml-2">
                          Start Test →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Test Instructions */}
              <div className="mt-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                <h4 className="text-sm sm:text-base font-medium text-zinc-300 mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Test Instructions:
                </h4>
                <ul className="text-xs sm:text-sm text-zinc-400 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-600 mt-0.5">•</span>
                    <span>Each set contains 20 multiple choice questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-600 mt-0.5">•</span>
                    <span>Time limit: 30 minutes per set</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-600 mt-0.5">•</span>
                    <span>Test will auto-submit when time expires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-600 mt-0.5">•</span>
                    <span>You can submit early using the submit button</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-600 mt-0.5">•</span>
                    <span>Your score will be displayed immediately after completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MockTests;