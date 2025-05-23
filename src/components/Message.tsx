// src/components/Message.tsx
import React from "react";
import type { Message as MessageType } from "../store/chatStore";
import PluginCard from "./PluginCard";

interface Props {
  msg: MessageType;
}

export default function Message({ msg }: Props) {
  if (msg.type === "plugin") {
    return <PluginCard msg={msg} />;
  }

  return (
    <div
      className={`p-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
    >
      <div className="bg-gray-100 p-3 inline-block rounded-lg shadow-sm">
        {msg.content}
      </div>
    </div>
  );
}
