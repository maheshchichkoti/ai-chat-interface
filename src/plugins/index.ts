// src/plugins/index.ts
import weather from "./weather";
import calc from "./calc";
import define from "./define";

const plugins = [weather, calc, define];

export const pluginManager = {
  parse(input: string) {
    for (const plugin of plugins) {
      const match = input.match(plugin.pattern);
      if (match) {
        return { plugin, args: match[1] };
      }
    }
    return null;
  },
};
