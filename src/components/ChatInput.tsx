// src/components/ChatInput.tsx
import React, { useState } from "react";
import { useChatStore } from "../store/chatStore";
import { pluginManager } from "../plugins";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const add = useChatStore((s) => s.addMessage);

  const handleSubmit = async () => {
    const userInput = input.trim();
    if (!userInput) return;

    add({ sender: "user", content: userInput, type: "text" });
    setInput("");

    const parsed = pluginManager.parse(userInput);
    if (parsed) {
      const { plugin, args } = parsed;

      setTimeout(async () => {
        const pluginData = await plugin.execute(args);
        add({
          sender: "assistant",
          content: "",
          type: "plugin",
          pluginName: plugin.name,
          pluginData,
        });
      }, 1000);
    } else {
      add({
        sender: "assistant",
        content:
          "Unknown command. Try `/weather Tokyo`, `/calc 7 * 6`, or `/define AI`.",
        type: "text",
      });
    }
  };

  return (
    <div className="p-4 flex border-t">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="flex-1 px-4 py-2 border rounded"
        placeholder="Type a message or try /calc 5 * 10 or /weather Delhi"
      />
      <button
        onClick={handleSubmit}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}
