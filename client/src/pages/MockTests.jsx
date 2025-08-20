import React, { useState } from "react";
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-zinc-300" />
              <h1 className="text-3xl font-bold text-white">Mock Tests</h1>
            </div>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Test your knowledge with our comprehensive mock tests designed for
              interviews and placements
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-zinc-900 border-zinc-800 text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">12</h3>
              <p className="text-zinc-400">Test Categories</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">30</h3>
              <p className="text-zinc-400">Minutes per Test</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">20</h3>
              <p className="text-zinc-400">Questions per Set</p>
            </CardContent>
          </Card>
        </div>

        {/* Mock Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(mockTestsData).map(([testName, testData]) => {
            const IconComponent = iconComponents[testData.icon] || Code;
            return (
              <Card
                key={testData.id}
                className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-all duration-200 cursor-pointer group"
                onClick={() => handleTestClick(testName, testData)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700">
                      <IconComponent className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testName}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 mb-4 text-sm">
                    {testData.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>
                      {Object.keys(testData.sets).length} Sets Available
                    </span>
                    <span>20 Questions each</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-zinc-500" />
                    <span className="text-xs text-zinc-500">30 minutes</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal for Set Selection */}
      {showModal && selectedTest && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                {React.createElement(
                  iconComponents[selectedTest.data.icon] || Code,
                  {
                    className: "h-6 w-6 text-zinc-300",
                  }
                )}
                <h2 className="text-xl font-semibold text-white">
                  {selectedTest.name}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-zinc-400 mb-6 text-sm">
                {selectedTest.data.description}
              </p>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-zinc-300 mb-3">
                  Select a Set to Begin:
                </h3>
                {Object.keys(selectedTest.data.sets).map((setNumber) => (
                  <Link
                    key={setNumber}
                    to={`/mock-test/${selectedTest.data.id}/set-${setNumber}`}
                    onClick={closeModal}
                    className="block"
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-zinc-700 group-hover:bg-zinc-600">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">
                            Set {setNumber}
                          </h4>
                          <p className="text-xs text-zinc-400">
                            20 Questions • 30 Minutes
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-zinc-500">Start Test →</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                <h4 className="text-sm font-medium text-zinc-300 mb-2">
                  Test Instructions:
                </h4>
                <ul className="text-xs text-zinc-400 space-y-1">
                  <li>• Each set contains 20 multiple choice questions</li>
                  <li>• Time limit: 30 minutes per set</li>
                  <li>• Test will auto-submit when time expires</li>
                  <li>• You can submit early using the submit button</li>
                  <li>
                    • Your score will be displayed immediately after completion
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
