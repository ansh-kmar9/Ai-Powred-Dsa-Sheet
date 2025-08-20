import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ content }) => {
  // Safety check for content
  if (!content || typeof content !== "string") {
    return (
      <div className="text-zinc-200">
        <p>No content to display</p>
      </div>
    );
  }

  try {
    return (
      <ReactMarkdown
        className="prose prose-invert prose-sm max-w-none"
        components={{
          // Custom heading styles
          h1: ({ children }) => (
            <h1 className="text-xl font-bold text-white mb-4 mt-6 first:mt-0 border-b border-zinc-700 pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-semibold text-white mb-3 mt-5 first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-md font-semibold text-zinc-200 mb-2 mt-4 first:mt-0">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-sm font-semibold text-zinc-300 mb-2 mt-3 first:mt-0">
              {children}
            </h4>
          ),

          // Custom paragraph styles
          p: ({ children }) => (
            <p className="text-zinc-200 mb-3 leading-relaxed">{children}</p>
          ),

          // Custom list styles
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 text-zinc-200 space-y-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 text-zinc-200 space-y-1">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-zinc-200 ml-4">{children}</li>
          ),

          // Custom code styles
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";

            return !inline && match ? (
              <div className="my-4">
                <div className="flex items-center justify-between bg-zinc-900 border border-zinc-700 rounded-t-lg px-4 py-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase">
                    {language}
                  </span>
                </div>
                <div className="bg-zinc-900 border border-t-0 border-zinc-700 rounded-b-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-zinc-200 font-mono whitespace-pre-wrap">
                    <code>{String(children).replace(/\n$/, "")}</code>
                  </pre>
                </div>
              </div>
            ) : (
              <code
                className="bg-zinc-800 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          },

          // Custom blockquote styles
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 my-4 bg-zinc-800/50 p-3 rounded-r-lg">
              <div className="text-zinc-300">{children}</div>
            </blockquote>
          ),

          // Custom strong/bold styles
          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),

          // Custom emphasis/italic styles
          em: ({ children }) => (
            <em className="italic text-zinc-300">{children}</em>
          ),

          // Custom link styles
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {children}
            </a>
          ),

          // Custom table styles
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-zinc-700 rounded-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-zinc-800">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="bg-zinc-900">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-zinc-700">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left text-zinc-200 font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-zinc-300">{children}</td>
          ),

          // Custom horizontal rule
          hr: () => <hr className="border-zinc-700 my-6" />,
        }}
      >
        {content}
      </ReactMarkdown>
    );
  } catch (error) {
    console.error("Error rendering markdown:", error);
    // Fallback to simple text rendering
    return (
      <div className="text-zinc-200">
        {content.split("\n").map((line, i) => (
          <p key={i} className="mb-2 last:mb-0">
            {line}
          </p>
        ))}
      </div>
    );
  }
};

export default MarkdownRenderer;
