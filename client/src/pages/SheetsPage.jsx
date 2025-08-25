import React, { useState, useEffect } from "react";
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
  Lightbulb,
  X,
} from "lucide-react";

const SheetsPage = () => {
  const navigate = useNavigate();
  const [showTipsModal, setShowTipsModal] = useState(false);

  // Close modal on escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowTipsModal(false);
      }
    };

    if (showTipsModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showTipsModal]);

  // Static sheet data
  const sheets = [
    {
      name: "DSA360",
      description:
        "180 DSA problems organized pattern-wise for interview prep.",
      totalQuestions: 180,
      icon: Brain,
      difficulty: "Pattern Wise",
    },
    {
      name: "SDE",
      description:
        "Covers all variations of DSA with 389 curated problems for SDE interview prep.",
      totalQuestions: 389,
      icon: Code,
      difficulty: "Mixed Variations",
    },
    {
      name: "Blind75",
      description:
        "75 essential coding problems covering key patterns for technical interviews.",
      totalQuestions: 75,
      icon: Target,
      difficulty: "Core Level",
    },
    {
      name: "Interview",
      description:
        "Company-wise coding interview question sheet covering top tech companies.",
      totalQuestions: 3444,
      icon: Zap,
      difficulty: "Company Wise",
    },
    {
      name: "Supreme",
      description: "DSA problems from scratch to advanced level for complete preparation.",
      totalQuestions: 478,
      icon: Star,
      difficulty: "Scratch to Advance"
    }
  ];

  const tips = [
    "1. DSA360: If you want to practice pattern wise questions.",
    "2. SDE: If you are preparing for SDE and want to practice good variation of questions on each topic.",
    "3. Blind 75: If you want to do a quick recap for major topics.",
    "4. Interview: If you want to practice company wise questions.",
    "5. Supreme: If you want to start DSA from scratch to advance."
  ];

  // Function to parse and highlight sheet names
  const parseAndHighlightTip = (tip) => {
    const sheetNames = ["DSA360", "SDE", "Blind 75", "Interview", "Supreme"];
    let highlightedTip = tip;
    
    sheetNames.forEach(sheetName => {
      const regex = new RegExp(`\\b${sheetName}\\b`, 'g');
      highlightedTip = highlightedTip.replace(regex, `<span class="text-yellow-400 font-semibold">${sheetName}</span>`);
    });
    
    return highlightedTip;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Tips Button - Responsive positioning */}
      <div className="fixed top-16 sm:top-20 right-4 sm:right-6 md:right-8 lg:right-10 z-50">
        <Button
          onClick={() => setShowTipsModal(true)}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black p-2"
          title="Tips"
        >
          <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>

      {/* Tips Modal - Fully responsive */}
      {showTipsModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6 lg:p-8"
          onClick={(e) => e.target === e.currentTarget && setShowTipsModal(false)}
        >
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 sm:p-6 max-w-sm sm:max-w-md md:max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <Button
              onClick={() => setShowTipsModal(false)}
              variant="ghost"
              className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1 hover:bg-zinc-800"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Modal Header */}
            <div className="flex items-center mb-4 sm:mb-6 pr-8 sm:pr-10">
              <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 mr-2" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Sheet Choosing Tips</h3>
            </div>

            {/* Tips List */}
            <div className="space-y-3 sm:space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p 
                    className="text-zinc-300 text-xs sm:text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: parseAndHighlightTip(tip) }}
                  />
                </div>
              ))}
            </div>

            {/* Close Button at Bottom */}
            <div className="mt-4 sm:mt-6 flex justify-end">
              <Button
                onClick={() => setShowTipsModal(false)}
                className="bg-white text-black hover:bg-zinc-200 text-sm px-4 py-2"
              >
                Got it!
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Go Back Button - Responsive */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="flex items-center space-x-2 text-zinc-400 hover:text-white hover:bg-zinc-800 p-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm sm:text-base">Go Back</span>
        </Button>
      </div>

      {/* Sheets Section - Enhanced responsive design */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-16 border-zinc-800">
        <div className="max-w-6xl mx-auto">
          {/* Header - Responsive typography */}
          <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Available Sheets
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg px-4 sm:px-0">
              Start with these carefully selected problem collections
            </p>
          </div>

          {/* Sheets Grid - Enhanced responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            {sheets.map((sheet) => {
              const IconComponent = sheet.icon;

              return (
                <Card
                  key={sheet.name}
                  className="bg-zinc-900 border-zinc-800 p-4 sm:p-5 md:p-6 hover:bg-zinc-800/50 transition-colors"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-zinc-800 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                          {sheet.name}
                        </h3>
                        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                          {sheet.totalQuestions} problems
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500 px-2 py-1 border border-zinc-700 rounded whitespace-nowrap">
                      {sheet.difficulty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    {sheet.description}
                  </p>

                  {/* Action Button */}
                  <Link to={`/sheet/${sheet.name}`}>
                    <Button className="w-full bg-white text-black hover:bg-zinc-200 text-sm sm:text-base flex items-center justify-center py-2 sm:py-3">
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

      {/* Stats Overview - Enhanced responsive design */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          {/* Stats Grid - Responsive layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <div className="text-center p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                {sheets.length}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500">Sheets</div>
            </div>
            
            <div className="text-center p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                {sheets.reduce((sum, sheet) => sum + sheet.totalQuestions, 0)}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500">Problems</div>
            </div>
            
            <div className="text-center p-3 sm:p-4 md:p-6 col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                5
              </div>
              <div className="text-xs sm:text-sm text-zinc-500">Levels</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SheetsPage;