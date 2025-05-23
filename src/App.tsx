// src/App.tsx
import "./index.css";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 border shadow-lg rounded-lg bg-white">
      <Chat />
      <ChatInput />
    </div>
  );
}

export default App;
