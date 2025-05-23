# 🤖 AI Plugin Chat Interface

An AI-powered chat interface built with **React**, **TypeScript**, **Zustand**, and **Tailwind CSS**. This interface supports plugin-style slash commands like `/weather Delhi`, `/calc 4 * 7`, and `/define innovation`.

This project was built as part of a **full-stack take-home assessment** to showcase skills in:

- 💻 Component-based React development
- 🧩 Plugin architecture and modular tool design
- 🧠 Smart parsing and command routing
- ⚡ Simulated real-time behavior
- ✨ Production-readiness and clean codebase

---

## ✨ Features

- 🧩 **Plugin System** – Slash-command execution via pluggable tool architecture
- 💬 **Interactive Chat UI** – Chat bubbles with assistant and user avatars
- 🧠 **Smart Parsing** – Detects commands with or without arguments
- 🔄 **Typing Simulation** – Adds delay to mimic natural plugin responses
- 🦾 **Modern Stack** – Built with Vite, Tailwind, Zustand, MathJS
- 🧱 **Clean Architecture** – Fully typed, modular, and scalable codebase

---

## 🛠️ Commands You Can Use

| Command              | Description                                        |
| -------------------- | -------------------------------------------------- |
| `/weather [city]`    | Returns mocked weather info for the specified city |
| `/calc [expression]` | Evaluates math expressions safely using MathJS     |
| `/define [word]`     | Returns mocked dictionary definition               |
| `/weather` (no arg)  | Shows ⚠️ warning: "City not provided"              |
| Invalid command      | Assistant replies with a help message              |

### 💬 Example Commands:

```bash
/calc 5 * (3 + 2)
/weather Tokyo
/define synchronous
/hello this is invalid
```

🧑‍💻 Tech Stack
Frontend: React + TypeScript
Styling: Tailwind CSS
State Management: Zustand
Math Engine: MathJS
Parsing & Routing: Regex + Custom Plugin Manager
Build Tool: Vite
Deployment: Vercel
📁 Folder Structure
src/
│
├── components/ # Chat, ChatInput, Message, PluginCard
├── plugins/ # Plugin logic: /weather, /calc, /define
├── store/ # Zustand global state store
├── types/ # Custom type declarations
├── utils/ # Future helpers or command parsers
└── App.tsx # Root component
📦 Getting Started
Install dependencies

npm install

Run the development server

npm run dev

Start chatting Type commands like /weather Paris or /calc 10 / 2 to trigger plugin responses.

🚀 Deployment (Vercel-friendly)
Want to deploy it? It’s fully supported on Vercel:

Push your code to GitHub.
Go to https://vercel.com/import.
Select your repo.
Set:
Framework preset: Vite
Build command: npm run build
Output directory: dist
Click Deploy 🔥
🙋‍♂️ Why This Project?
This project is modeled after real-world AI chat interfaces — inspired by ChatGPT Plugins. It showcases:

⚙️ Full-stack architecture planning
🔌 Extensible plugin system
🧠 Command parsing and routing
🔄 Real-time UX behaviors
💻 Clean, modern tech stack and code practices
📌 Future Enhancements (Ideas)
🔍 Natural language parsing: "What’s the weather in Delhi?" → /weather Delhi
💾 Chat history persistence using localStorage or backend APIs
🌍 Real API integrations: OpenWeatherMap, Dictionary API, etc.
⌛ Typing animations or assistant dot loaders
🧱 Dynamic plugin loader (add/remove plugins at runtime)
👨‍💻 Author
Built with ♥ by [Your Name]

A full-stack engineer passionate about building intelligent interfaces, scalable tools, and meaningful experiences.

GitHub
LinkedIn
Portfolio
📄 License
This project is licensed under the MIT License.

💬 Final Note from the Developer
"This project is not just a chat app — it’s a flexible, feature-ready base for command-driven conversational UIs. It represents my ability to plan, implement, and polish real-world software — combining engineering, UX, and future scale."

✅ Just replace:

- `[Your Name]`
- GitHub/LinkedIn/Portfolio links

💡 **Pro Tip:** You can view markdown in real time using [readme.so](https://readme.so/) or in VS Code preview tab `Ctrl+Shift+V`.

Let me know if you want:

- A custom **live Vercel deployment link**
- A **natural language processor**
- An **API integration** like OpenWeather or DictionaryAPI

Congrats again — you're ready to submit! 🏁🔥
