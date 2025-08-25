import React from "react";

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
    // Remove markdown wrapper if present
    let processedContent = content;
    if (content.startsWith("```markdown") && content.endsWith("```")) {
      processedContent = content.substring(11, content.length - 3).trim();
    }

    const lines = processedContent.split("\n");
    const elements = [];
    let inCodeBlock = false;
    let codeBlockLines = [];
    let codeLanguage = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Handle code blocks
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          // Starting a code block
          inCodeBlock = true;
          codeLanguage = line.substring(3).trim();
          codeBlockLines = [];
        } else {
          // Ending a code block
          inCodeBlock = false;
          elements.push(
            <div key={i} className="my-4">
              <div className="flex items-center justify-between bg-zinc-900 border border-zinc-700 rounded-t-lg px-4 py-2">
                <span className="text-xs font-mono text-zinc-400 uppercase">
                  {codeLanguage || "code"}
                </span>
              </div>
              <div className="bg-zinc-900 border border-t-0 border-zinc-700 rounded-b-lg p-4 overflow-x-auto">
                <pre className="text-sm text-zinc-200 font-mono whitespace-pre-wrap">
                  <code>{codeBlockLines.join("\n")}</code>
                </pre>
              </div>
            </div>
          );
          codeBlockLines = [];
          codeLanguage = "";
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlockLines.push(line);
        continue;
      }

      // Handle headers
      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={i}
            className="text-lg font-semibold text-white mb-3 mt-5 first:mt-0"
          >
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={i}
            className="text-md font-semibold text-zinc-200 mb-2 mt-4 first:mt-0"
          >
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith("#### ")) {
        elements.push(
          <h4
            key={i}
            className="text-sm font-semibold text-zinc-300 mb-2 mt-3 first:mt-0"
          >
            {line.substring(5)}
          </h4>
        );
      }
      // Handle bold text lines
      else if (
        line.startsWith("**") &&
        line.endsWith("**") &&
        line.length > 4
      ) {
        elements.push(
          <p key={i} className="text-zinc-200 mb-3 leading-relaxed">
            <strong className="font-semibold text-white">
              {line.substring(2, line.length - 2)}
            </strong>
          </p>
        );
      }
      // Handle list items
      else if (line.startsWith("* ") || line.startsWith("- ")) {
        const listContent = line.substring(2);
        // Check for bold within list items
        if (listContent.includes("**")) {
          const parts = listContent.split("**");
          elements.push(
            <p key={i} className="text-zinc-200 ml-4 mb-1">
              •{" "}
              {parts.map((part, partIndex) =>
                partIndex % 2 === 1 ? (
                  <strong key={partIndex} className="font-semibold text-white">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          );
        } else {
          elements.push(
            <p key={i} className="text-zinc-200 ml-4 mb-1">
              • {listContent}
            </p>
          );
        }
      }
      // Handle inline code
      else if (line.includes("`") && !line.startsWith("```")) {
        const parts = line.split("`");
        elements.push(
          <p key={i} className="text-zinc-200 mb-3 leading-relaxed">
            {parts.map((part, partIndex) =>
              partIndex % 2 === 1 ? (
                <code
                  key={partIndex}
                  className="bg-zinc-800 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono"
                >
                  {part}
                </code>
              ) : (
                part
              )
            )}
          </p>
        );
      }
      // Handle empty lines
      else if (line.trim() === "") {
        elements.push(<br key={i} />);
      }
      // Handle regular paragraphs with possible bold/italic formatting
      else {
        let processedLine = line;

        // Handle bold text within paragraphs
        if (processedLine.includes("**")) {
          const parts = processedLine.split("**");
          elements.push(
            <p key={i} className="text-zinc-200 mb-3 leading-relaxed">
              {parts.map((part, partIndex) =>
                partIndex % 2 === 1 ? (
                  <strong key={partIndex} className="font-semibold text-white">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          );
        } else {
          elements.push(
            <p key={i} className="text-zinc-200 mb-3 leading-relaxed">
              {processedLine}
            </p>
          );
        }
      }
    }

    return (
      <div className="prose prose-invert prose-sm max-w-none overflow-hidden break-words">
        {elements}
      </div>
    );
  } catch (error) {
    console.error("Error rendering content:", error);
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
