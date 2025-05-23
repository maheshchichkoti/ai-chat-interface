import { evaluate } from "mathjs";

export default {
  name: "calc",
  pattern: /^\/calc\s(.+)/i,
  async execute(expression: string) {
    try {
      const result = evaluate(expression);
      return { result };
    } catch {
      return { result: "Invalid math expression" };
    }
  },
};
