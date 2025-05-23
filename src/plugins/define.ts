export default {
  name: "define",
  pattern: /^\/define\s(.+)/i,
  async execute(word: string) {
    return {
      word,
      definition: `"${word}" means this word is still waiting for a real API 😉`,
    };
  },
};
