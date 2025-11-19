import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import MarkdownRenderer from "../components/SimpleMarkdownRenderer2";
import {
  Bot,
  Send,
  User,
  AlertCircle,
  Loader2,
  Sparkles,
  MessageSquare,
  Trash2,
} from "lucide-react";

const AiDoubtSolver = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Initialize Google Generative AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check for pre-filled question from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const question = urlParams.get("question");
    if (question) {
      const decodedQuestion = decodeURIComponent(question);
      setInput(decodedQuestion);
    }
  }, [location]);

  // Build conversation context for AI
  const buildConversationContext = (newUserMessage) => {
    let conversationHistory = "";

    if (messages.length > 0) {
      conversationHistory = "\n\nPrevious conversation history:\n";
      messages.forEach((msg, index) => {
        if (msg.type === "user") {
          conversationHistory += `\nUser: ${msg.content}`;
        } else if (msg.type === "ai") {
          conversationHistory += `\nAssistant: ${msg.content}`;
        }
      });
      conversationHistory += "\n\n";
    }

    return `You are an AI educational assistant specialized in Computer Science and Programming. Your role is to help students with their academic doubts and questions related to:

- Data Structures and Algorithms (DSA)
- Computer Networks
- Operating Systems
- Database Management Systems (DBMS)
- Object-Oriented Programming (OOP)
- Programming languages (C, C++, Java, Python, JavaScript)
- Software Engineering concepts
- Computer Science fundamentals

Guidelines:
1. Only answer questions related to Computer Science, Programming, and educational topics
2. Provide clear, concise, and educational explanations using proper markdown formatting
3. Use examples and analogies when helpful
4. If asked about non-educational topics, politely redirect to study-related questions
5. Break down complex concepts into simpler parts
6. Suggest related topics for further learning
7. Encourage good programming practices
8. Format your response using markdown with proper headings (##, ###), code blocks (\`\`\`language), bullet points, and emphasis
9. Use code blocks for all code examples with appropriate language syntax highlighting
10. Structure your response with clear headings and subheadings for better readability
11. Remember the context of our previous conversation and build upon it when relevant
12. if the question is about the coding then use c++ for it, and provide the code in a code block, and if the user is asking in other language then provide the code in that language as well

IMPORTANT: Always format your response in markdown. Use:
- ## for main headings
- ### for subheadings  
- \`\`\`python or \`\`\`java or \`\`\`cpp etc. for code blocks
- **bold** for important terms
- *italic* for emphasis
- - or * for bullet points
- > for important notes or tips

If the question is not related to Computer Science or educational topics, respond with: "I'm here to help with Computer Science and programming questions only. Please ask me about topics like DSA, programming languages, computer networks, operating systems, databases, or other CS fundamentals."

${conversationHistory}Current Question: ${newUserMessage}

Please provide a helpful and educational response using proper markdown formatting, considering our conversation history if relevant:`;
  };

  const handleSubmitQuestion = async (questionText) => {
    const userMessage = questionText.trim();
    if (!userMessage || isLoading) return;

    setError("");
    setIsLoading(true);

    // Clear input field immediately after submission
    setInput("");

    // Add user message to chat
    const newUserMsg = {
      type: "user",
      content: userMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newUserMsg]);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const contextPrompt = buildConversationContext(userMessage);

      const result = await model.generateContent(contextPrompt);
      const response = await result.response;
      const aiResponse = response.text();

      // Add AI response to chat (maintaining conversation history)
      const newAiMsg = {
        type: "ai",
        content: aiResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newAiMsg]);
    } catch (err) {
      console.error("Error generating response:", err);
      setError("Failed to get response. Please try again.");
      // Remove the last user message on error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    await handleSubmitQuestion(input);
  };

  const clearChat = () => {
    setMessages([]);
    setError("");
  };

  const suggestedQuestions = [
    "Explain the difference between Stack and Queue",
    "What is the time complexity of Binary Search?",
    "How does TCP differ from UDP?",
    "What are the ACID properties in DBMS?",
    "Explain polymorphism in OOP",
    "What is a deadlock in Operating Systems?",
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)]">
          {/* Main Chat Area */}
          <div className="h-full max-w-full overflow-hidden">
            <Card className="bg-zinc-900 border-zinc-800 h-full flex flex-col max-w-full overflow-hidden">
              {/* Chat Header */}
              <CardHeader className="border-b border-zinc-800 flex-shrink-0 p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-zinc-400" />
                    <span className="text-lg sm:text-xl">AI Doubt Solver</span>
                    {messages.length > 0 && (
                      <span className="text-sm text-zinc-400 font-normal">
                        ({messages.filter((m) => m.type === "user").length}{" "}
                        questions)
                      </span>
                    )}
                  </CardTitle>
                  {messages.length > 0 && (
                    <Button
                      onClick={clearChat}
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 text-black-300 hover:bg-zinc-800 hover:text-white flex items-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Clear Chat</span>
                    </Button>
                  )}
                </div>
              </CardHeader>

              <div className="flex flex-col flex-1 min-h-0 max-w-full overflow-hidden">
                {/* Messages Area - Scrollable */}
                <div
                  ref={messagesContainerRef}
                  className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900"
                  style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
                >
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4 sm:space-y-6 px-4">
                      <div className="p-3 sm:p-4 rounded-full bg-zinc-200">
                        <Bot className="h-8 w-8 sm:h-12 sm:w-12 text-black" />
                      </div>
                      <div className="space-y-2 sm:space-y-3 max-w-md">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                          Welcome to AI Doubt Solver!
                        </h3>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                          Ask me anything about Computer Science, Programming,
                          DSA, or any educational topic. I remember our entire
                          conversation!
                        </p>
                      </div>

                      {/* Mobile-friendly suggested questions */}
                      <div className="w-full max-w-2xl space-y-2">
                        <h4 className="text-sm font-medium text-zinc-300 mb-3">
                          Try these questions:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {suggestedQuestions
                            .slice(0, 3)
                            .map((question, index) => (
                              <button
                                key={index}
                                onClick={() => setInput(question)}
                                className="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white text-sm transition-colors text-left"
                              >
                                {question}
                              </button>
                            ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex gap-2 sm:gap-3 w-full ${
                            message.type === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {message.type === "ai" && (
                            <div className="flex-shrink-0">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                                <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                              </div>
                            </div>
                          )}

                          <div
                            className={`max-w-[75%] sm:max-w-[70%] p-2 sm:p-3 rounded-lg break-words overflow-hidden ${
                              message.type === "user"
                                ? "bg-zinc-100 text-black"
                                : "bg-zinc-800 text-zinc-200"
                            }`}
                          >
                            {message.type === "ai" ? (
                              <div className="overflow-hidden max-w-full">
                                <MarkdownRenderer
                                  content={message.content || ""}
                                />
                              </div>
                            ) : (
                              <div className="prose prose-invert prose-sm max-w-none overflow-hidden">
                                {(message.content || "")
                                  .split("\n")
                                  .map((line, i) => (
                                    <p
                                      key={i}
                                      className="mb-1 last:mb-0 text-sm sm:text-base break-words overflow-wrap-anywhere"
                                    >
                                      {line}
                                    </p>
                                  ))}
                              </div>
                            )}
                            <div className="text-xs opacity-70 mt-1 sm:mt-2">
                              {message.timestamp?.toLocaleTimeString() || ""}
                            </div>
                          </div>

                          {message.type === "user" && (
                            <div className="flex-shrink-0">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                                <User className="h-3 w-3 sm:h-4 sm:w-4 text-zinc-300" />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      {isLoading && (
                        <div className="flex gap-2 sm:gap-3 justify-start">
                          <div className="flex-shrink-0">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                              <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                            </div>
                          </div>
                          <div className="bg-zinc-800 text-zinc-200 p-2 sm:p-3 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span className="text-sm">Thinking...</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Invisible element to scroll to */}
                      <div ref={messagesEndRef} />
                    </>
                  )}
                </div>

                {/* Error Message */}
                {error && (
                  <div className="px-3 sm:px-4 pb-2 flex-shrink-0">
                    <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-red-900/50 border border-red-700 text-red-200">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm break-words">{error}</span>
                    </div>
                  </div>
                )}

                {/* Input Area - Fixed at bottom */}
                <div className="border-t border-zinc-800 p-3 sm:p-4 flex-shrink-0 bg-zinc-900">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <textarea
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Ask your doubt about Computer Science, Programming, DSA, etc..."
                          rows={1}
                          className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-zinc-400 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500 text-sm sm:text-base"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              handleSubmit(e);
                            }
                          }}
                          style={{
                            minHeight: "42px",
                            maxHeight: "120px",
                          }}
                          onInput={(e) => {
                            e.target.style.height = "42px";
                            e.target.style.height =
                              Math.min(e.target.scrollHeight, 120) + "px";
                          }}
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="bg-zinc-600 hover:bg-zinc-700 disabled:opacity-50 px-3 sm:px-4 py-2 sm:py-3 flex-shrink-0"
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    {/* Input Helper Text */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-500">
                      <span>Press Enter to send, Shift+Enter for new line</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        Conversation context is remembered
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDoubtSolver;
