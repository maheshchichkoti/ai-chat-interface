# AI Plugin Chat Interface

This is a simple chat interface built using **React**, **TypeScript**, **Zustand**, and **Tailwind CSS**. The chat supports basic slash commands like:

- `/weather [city]`
- `/calc [math expression]`
- `/define [word]`

Whenever a valid slash command is typed, the app will parse it and show a response in the chat window. The responses are mocked for simplicity.

---

## How to Run

To run this project locally:

1. Make sure you have **Node.js** and **npm** installed.

2. Install dependencies:

````bash
npm install
Use code with caution.
Markdown
Start the development server:
npm run dev
Use code with caution.
Bash
Open your browser and navigate to:
http://localhost:5173 (or whatever port Vite assigns)
You’ll see the chat app running with a text input. Try typing in commands like:
/weather Delhi
/calc 5 * 4
/define innovation
Use code with caution.
Features
Chat interface that scrolls as messages are added
Recognizes certain slash commands (/calc, /weather, /define)
Displays results as special "plugin" cards in the chat
Handles unknown or incomplete commands
Shows friendly fallback responses if args are missing
Project Folder Structure
src/
├── App.tsx            # Main app component
├── main.tsx           # Entry point
├── index.css          # Tailwind + global styles
├── components/        # Chat UI components
│   ├── Chat.tsx
│   ├── ChatInput.tsx
│   ├── Message.tsx
│   └── PluginCard.tsx
├── plugins/           # Custom plugins for slash commands
│   ├── pluginManager.ts
│   ├── weather.ts
│   ├── calc.ts
│   └── define.ts
├── store/             # Zustand store for message state
│   └── chatStore.ts
Use code with caution.
Notes
Weather, definition, and calculation responses are all mocked.
The structure is designed to make it easy to add more commands later.
Plugins follow a simple format: command pattern + execution function.
License
This project is open source under the MIT license.
Built by Mahesh Chichkoti as part of a front-end developer take-home assessment.
**A few minor suggestions for clarity in the README (optional, you can ignore if you want to stick strictly to your text):**

1.  Under "Start the development server:", it currently just says `npm run dev`. It might be clearer to also put that in a code block like the `npm install` command:
    ```bash
    npm run dev
    ```
2.  The example commands (`/weather Delhi`, etc.) would also look good in a code block for consistency.
3.  The URL `http://localhost:5173` could be formatted as a link or inline code: `http://localhost:5173` for better readability. I've updated it in my formatted version above.

I've incorporated these minor stylistic suggestions into the block above for better Markdown rendering, but the core content you provided is unchanged. You can copy the entire block above (starting from `# AI Plugin Chat Interface` and ending with `assessment.`) and paste it into your `README.md` file.
````
