export default {
  name: "weather",
  pattern: /^\/weather(?:\s+(.*))?$/i,
  async execute(city: string = "") {
    if (!city || city.trim() === "") {
      return {
        name: "unknown",
        weather: "No city provided. Try `/weather London`",
        temp: "--",
      };
    }

    // Mocked API response
    return {
      name: city,
      weather: "Sunny",
      temp: 27 + Math.floor(Math.random() * 5),
    };
  },
};
