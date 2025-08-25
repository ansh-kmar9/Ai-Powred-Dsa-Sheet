import React, { useState, useEffect } from "react";
import { dbmsData } from "../data/databaseManagementSystems";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import {
  BookOpen,
  ChevronRight,
  ChevronDown,
  Database,
  FileText,
  Image as ImageIcon,
  Circle,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";

const DatabaseManagementSystems = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize with first topic and subtopic
  useEffect(() => {
    const firstSection = Object.keys(dbmsData)[0];
    const firstTopic = dbmsData[firstSection].topics[0];

    setSelectedTopic(firstSection);
    setSelectedSubtopic(firstTopic.id);
    setExpandedSections({ [firstSection]: true });
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('.mobile-sidebar') && !event.target.closest('.mobile-toggle')) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleTopicSelect = (sectionKey, topicId) => {
    setSelectedTopic(sectionKey);
    setSelectedSubtopic(topicId);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection

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

    const section = dbmsData[selectedTopic];
    const topic = section.topics.find((t) => t.id === selectedSubtopic);
    return topic;
  };

  const renderContent = (content) => {
    const parts = content.split(/(```[\s\S]*?```)/);

    return parts.map((part, index) => {
      // Handle code blocks
      if (part.startsWith("```") && part.endsWith("```")) {
        const codeContent = part.slice(3, -3);
        const lines = codeContent.split("\n");
        const language = lines[0].trim();
        const code = lines.slice(1).join("\n").trim();

        return (
          <div key={index} className="my-4">
            <div className="bg-zinc-800 rounded-lg border border-zinc-700">
              <div className="px-3 py-2 border-b border-zinc-700 bg-zinc-800/50 rounded-t-lg">
                <span className="text-xs text-zinc-400 font-medium">
                  {language || "code"}
                </span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-zinc-200 font-mono leading-relaxed">
                  {code}
                </code>
              </pre>
            </div>
          </div>
        );
      }

      // Handle regular text content
      return part.split("\n").map((line, lineIndex) => {
        line = line.trim();
        if (!line) return <br key={`${index}-${lineIndex}`} />;

        // Bold text (wrapped in **)
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <h3
              key={`${index}-${lineIndex}`}
              className="text-base font-bold text-white mt-4 mb-2"
            >
              {line.slice(2, -2)}
            </h3>
          );
        }

        // Sub-bold text (includes ** in middle)
        if (line.includes("**")) {
          const parts = line.split("**");
          return (
            <p
              key={`${index}-${lineIndex}`}
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
          <p
            key={`${index}-${lineIndex}`}
            className="text-zinc-300 mb-1.5 leading-relaxed text-sm"
          >
            {line}
          </p>
        );
      });
    });
  };

  const currentContent = getCurrentContent();
  const hasDiagrams = currentContent?.diagrams?.some(
    (diagram) => diagram.link && diagram.link.trim() !== ""
  );

  const SidebarContent = () => (
    <>
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Database className="h-5 w-5 text-zinc-100" />
            <h1 className="text-lg font-bold text-white">Database Management</h1>
          </div>
          {/* Close button for mobile */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-zinc-400 text-xs">
          Learning materials for database concepts
        </p>
      </div>

      {/* Navigation Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-3 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
        <div className="space-y-2">
          {Object.entries(dbmsData).map(([sectionKey, section]) => (
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
                      onClick={() => handleTopicSelect(sectionKey, topic.id)}
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
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-black text-white flex relative">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="mobile-toggle lg:hidden fixed top-20 left-4 z-50 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700 shadow-lg"
      >
        {isSidebarOpen ? (
          <ChevronLeft className="h-5 w-5 text-zinc-300" />
        ) : (
          <ChevronRight className="h-5 w-5 text-zinc-300" />
        )}
      </button>

      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:flex w-64 bg-zinc-900 border-r border-zinc-800 flex-col h-screen sticky top-0 shrink-0">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`mobile-sidebar lg:hidden fixed top-0 left-0 z-50 w-80 max-w-[85vw] bg-zinc-900 border-r border-zinc-800 h-full transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        <SidebarContent />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Mobile breadcrumb */}
          <div className="lg:hidden mb-4 flex items-center text-sm text-zinc-400">
            <Database className="h-4 w-4 mr-2" />
            <span>Database Management</span>
            {currentContent && (
              <>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-zinc-300 truncate">{currentContent.title}</span>
              </>
            )}
          </div>

          {currentContent ? (
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-white flex items-start sm:items-center flex-col sm:flex-row gap-2">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-zinc-100 flex-shrink-0" />
                    <span className="text-lg sm:text-xl">{currentContent.title}</span>
                  </div>
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
                                className="w-full h-auto max-w-full"
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
              <CardContent className="p-8 sm:p-12 text-center">
                <Database className="h-12 w-12 sm:h-16 sm:w-16 text-zinc-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Select a Topic
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base">
                  Choose a topic from the navigation to start learning
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatabaseManagementSystems;