import React, { useState, useEffect } from "react";
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
  BookOpen,
  Code,
  Database,
  Network,
  Server,
  Layers,
} from "lucide-react";

const AiDoubtSolver = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();

  // Initialize Google Generative AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

  // Check for pre-filled question from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const question = urlParams.get("question");
    if (question) {
      const decodedQuestion = decodeURIComponent(question);
      setInput(decodedQuestion);

      // Optionally auto-submit the question (uncomment if desired)
      // setTimeout(() => {
      //   handleSubmitQuestion(decodedQuestion);
      // }, 500);
    }
  }, [location]);

  const handleSubmitQuestion = async (questionText) => {
    const userMessage = questionText.trim();
    if (!userMessage || isLoading) return;

    setError("");
    setIsLoading(true);

    // Add user message to chat
    const newMessages = [
      ...messages,
      { type: "user", content: userMessage, timestamp: new Date() },
    ];
    setMessages(newMessages);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      // Context prompt for educational assistance
      const contextPrompt = `You are an AI educational assistant specialized in Computer Science and Programming. Your role is to help students with their academic doubts and questions related to:

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

IMPORTANT: Always format your response in markdown. Use:
- ## for main headings
- ### for subheadings  
- \`\`\`python or \`\`\`java or \`\`\`cpp etc. for code blocks
- **bold** for important terms
- *italic* for emphasis
- - or * for bullet points
- > for important notes or tips

If the question is not related to Computer Science or educational topics, respond with: "I'm here to help with Computer Science and programming questions only. Please ask me about topics like DSA, programming languages, computer networks, operating systems, databases, or other CS fundamentals."

Student Question: ${userMessage}

Please provide a helpful and educational response using proper markdown formatting:`;

      const result = await model.generateContent(contextPrompt);
      const response = await result.response;
      const aiResponse = response.text();

      // Replace current messages with new conversation (no history)
      setMessages([
        { type: "user", content: userMessage, timestamp: new Date() },
        { type: "ai", content: aiResponse, timestamp: new Date() },
      ]);
    } catch (err) {
      console.error("Error generating response:", err);
      setError("Failed to get response. Please try again.");
      // Remove the user message if there was an error
      setMessages(messages);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    await handleSubmitQuestion(input);
    setInput("");
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
    <div className="min-h-screen bg-black text-white">
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar with Topics */}
          <div className="lg:col-span-1">
            <Card className="bg-zinc-900 border-zinc-800 sticky top-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Topics I Can Help With
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { name: "Data Structures & Algorithms", icon: Code },
                    { name: "Computer Networks", icon: Network },
                    { name: "Operating Systems", icon: Server },
                    { name: "Database Management", icon: Database },
                    { name: "Object-Oriented Programming", icon: Layers },
                    { name: "Programming Languages", icon: Code },
                  ].map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-zinc-800/50 text-zinc-300 text-sm"
                    >
                      <topic.icon className="h-4 w-4" />
                      <span>{topic.name}</span>
                    </div>
                  ))}
                </div>

                {/* Suggested Questions */}
                <div className="pt-4 border-t border-zinc-700">
                  <h4 className="text-sm font-semibold text-zinc-300 mb-2">
                    Try asking:
                  </h4>
                  <div className="space-y-2">
                    {suggestedQuestions.slice(0, 3).map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(question)}
                        className="w-full text-left p-2 rounded-lg bg-zinc-800/30 hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-300 text-xs transition-colors"
                      >
                        "{question}"
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <Card className="bg-zinc-900 border-zinc-800 h-[calc(100vh-12rem)]">
              <CardHeader className="border-b border-zinc-800">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-zinc-400" />
                    Chat with AI Assistant
                  </CardTitle>
                  {messages.length > 0 && (
                    <Button
                      onClick={clearChat}
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 text-black-300 hover:bg-zinc-800 hover:text-white"
                    >
                      Clear Chat
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex flex-col h-full p-0">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                      <div className="p-4 rounded-full bg-zinc-200">
                        <Bot className="h-12 w-12 text-black-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">
                          Welcome to AI Doubt Solver!
                        </h3>
                        <p className="text-zinc-400 max-w-md">
                          Ask me anything about Computer Science, Programming,
                          DSA, or any educational topic. I'm here to help
                          clarify your doubts!
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
                        {suggestedQuestions.slice(3).map((question, index) => (
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
                  ) : (
                    <>
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex gap-3 ${
                            message.type === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {message.type === "ai" && (
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                                <Bot className="h-4 w-4 text-black" />
                              </div>
                            </div>
                          )}

                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.type === "user"
                                ? "bg-zinc-100 text-black"
                                : "bg-zinc-800 text-zinc-200"
                            }`}
                          >
                            {message.type === "ai" ? (
                              <MarkdownRenderer
                                content={message.content || ""}
                              />
                            ) : (
                              <div className="prose prose-invert prose-sm max-w-none">
                                {(message.content || "")
                                  .split("\n")
                                  .map((line, i) => (
                                    <p key={i} className="mb-2 last:mb-0">
                                      {line}
                                    </p>
                                  ))}
                              </div>
                            )}
                            <div className="text-xs opacity-70 mt-2">
                              {message.timestamp?.toLocaleTimeString() || ""}
                            </div>
                          </div>

                          {message.type === "user" && (
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                                <User className="h-4 w-4 text-zinc-300" />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      {isLoading && (
                        <div className="flex gap-3 justify-start">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                              <Bot className="h-4 w-4 text-black" />
                            </div>
                          </div>
                          <div className="bg-zinc-800 text-zinc-200 p-3 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span>Thinking...</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Error Message */}
                {error && (
                  <div className="px-4 pb-2">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-900/50 border border-red-700 text-red-200">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">{error}</span>
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="border-t border-zinc-800 p-4">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <div className="flex-1 relative">
                      <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask your doubt about Computer Science, Programming, DSA, etc..."
                        rows={1}
                        className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-400 focus:border-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                          }
                        }}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="bg-zinc-600 hover:bg-zinc-700 disabled:opacity-50 px-4 py-3"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </form>
                  <p className="text-xs text-zinc-500 mt-2">
                    Press Enter to send, Shift+Enter for new line. Only
                    educational questions are supported.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDoubtSolver;
