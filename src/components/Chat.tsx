// src/components/Chat.tsx
import ScrollToBottom from "react-scroll-to-bottom";
import { useChatStore } from "../store/chatStore";
import Message from "./Message";

export default function Chat() {
  const messages = useChatStore((s) => s.messages);

  return (
    <ScrollToBottom className="h-[80vh] p-4 overflow-y-auto">
      {messages.map((msg) => (
        <Message key={msg.id} msg={msg} />
      ))}
    </ScrollToBottom>
  );
}
