import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export type MessageType = "text" | "plugin";

export interface Message {
  id: string;
  sender: "user" | "assistant";
  content: string;
  type: MessageType;
  pluginName?: string;
  pluginData?: any;
  timestamp: string;
}

type ChatStore = {
  messages: Message[];
  addMessage: (msg: Omit<Message, "id" | "timestamp">) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (msg) => {
    const newMessage: Message = {
      ...msg,
      id: uuidv4(),
      timestamp: new Date().toISOString(),
    };
    set((state) => ({ messages: [...state.messages, newMessage] }));
  },
}));
