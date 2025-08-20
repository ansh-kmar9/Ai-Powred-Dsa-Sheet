import React, { useState } from "react";
import { computerNetworksData } from "../data/computerNetworks";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import {
  BookOpen,
  ChevronRight,
  ChevronDown,
  Network,
  FileText,
  Image as ImageIcon,
  Circle,
} from "lucide-react";

const ComputerNetworks = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  // Initialize with first topic and subtopic
  React.useEffect(() => {
    const firstSection = Object.keys(computerNetworksData)[0];
    const firstTopic = computerNetworksData[firstSection].topics[0];

    setSelectedTopic(firstSection);
    setSelectedSubtopic(firstTopic.id);
    setExpandedSections({ [firstSection]: true });
  }, []);

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleTopicSelect = (sectionKey, topicId) => {
    setSelectedTopic(sectionKey);
    setSelectedSubtopic(topicId);

    // Expand the section if not already expanded
    if (!expandedSections[sectionKey]) {
      setExpandedSections((prev) => ({
        ...prev,
        [sectionKey]: true,
      }));
    }
  };

  const getCurrentContent = () => {
    if (!selectedTopic || !selectedSubtopic) return null;

    const section = computerNetworksData[selectedTopic];
    const topic = section.topics.find((t) => t.id === selectedSubtopic);
    return topic;
  };

  const renderContent = (content) => {
    return content.split("\n").map((line, index) => {
      line = line.trim();
      if (!line) return <br key={index} />;

      // Bold text (wrapped in **)
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <h3 key={index} className="text-base font-bold text-white mt-4 mb-2">
            {line.slice(2, -2)}
          </h3>
        );
      }

      // Sub-bold text (includes ** in middle)
      if (line.includes("**")) {
        const parts = line.split("**");
        return (
          <p
            key={index}
            className="text-zinc-300 mb-1.5 leading-relaxed text-sm"
          >
            {parts.map((part, partIndex) =>
              partIndex % 2 === 1 ? (
                <strong key={partIndex} className="text-white font-semibold">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      }

      // Regular text
      return (
        <p key={index} className="text-zinc-300 mb-1.5 leading-relaxed text-sm">
          {line}
        </p>
      );
    });
  };

  const currentContent = getCurrentContent();
  const hasDiagrams = currentContent?.diagrams?.some(
    (diagram) => diagram.link && diagram.link.trim() !== ""
  );

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Navigation - Fixed Sidebar */}
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col h-screen sticky top-0">
        {/* Header */}
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center space-x-2 mb-2">
            <Network className="h-5 w-5 text-zinc-100" />
            <h1 className="text-lg font-bold text-white">Computer Networks</h1>
          </div>
          <p className="text-zinc-400 text-xs">
            Learning materials for networking concepts
          </p>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="space-y-2">
            {Object.entries(computerNetworksData).map(
              ([sectionKey, section]) => (
                <div key={sectionKey} className="space-y-1">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(sectionKey)}
                    className="w-full flex items-center justify-between p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-left"
                  >
                    <span className="font-medium text-white text-xs">
                      {sectionKey}
                    </span>
                    {expandedSections[sectionKey] ? (
                      <ChevronDown className="h-3 w-3 text-zinc-400 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-3 w-3 text-zinc-400 flex-shrink-0" />
                    )}
                  </button>

                  {/* Section Topics */}
                  {expandedSections[sectionKey] && (
                    <div className="ml-1 space-y-1">
                      {section.topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() =>
                            handleTopicSelect(sectionKey, topic.id)
                          }
                          className={`w-full text-left p-1.5 rounded-lg text-xs transition-colors flex items-center group ${
                            selectedTopic === sectionKey &&
                            selectedSubtopic === topic.id
                              ? "bg-zinc-500 text-white"
                              : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                          }`}
                        >
                          {/* Active Marker */}
                          <div
                            className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 transition-colors ${
                              selectedTopic === sectionKey &&
                              selectedSubtopic === topic.id
                                ? "bg-white"
                                : "bg-zinc-600 group-hover:bg-zinc-400"
                            }`}
                          />
                          <span className="truncate">{topic.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        <div className="p-8">
          {currentContent ? (
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-zinc-100" />
                  {currentContent.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  {renderContent(currentContent.content)}
                </div>

                {/* Diagrams - Only show if link exists */}
                {hasDiagrams && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <ImageIcon className="mr-2 h-5 w-5 text-zinc-100" />
                      Diagrams
                    </h3>
                    {currentContent.diagrams
                      .filter(
                        (diagram) => diagram.link && diagram.link.trim() !== ""
                      )
                      .map((diagram, index) => (
                        <Card
                          key={index}
                          className="bg-zinc-800 border-zinc-700"
                        >
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-white mb-2 text-sm">
                              {diagram.title}
                            </h4>
                            <div className="rounded-lg overflow-hidden border border-zinc-600">
                              <img
                                src={diagram.link}
                                alt={diagram.title}
                                className="w-full h-auto"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.nextSibling.style.display = "block";
                                }}
                              />
                              <div className="border-2 border-dashed border-zinc-600 rounded-lg p-6 text-center hidden">
                                <ImageIcon className="h-8 w-8 text-zinc-500 mx-auto mb-2" />
                                <h4 className="font-semibold text-white mb-1 text-sm">
                                  {diagram.title}
                                </h4>
                                <p className="text-zinc-500 text-xs">
                                  [Image not available]
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-12 text-center">
                <Network className="h-16 w-16 text-zinc-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Select a Topic
                </h3>
                <p className="text-zinc-400">
                  Choose a topic from the left navigation to start learning
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComputerNetworks;
