import type { Message as MessageType } from "../store/chatStore";

export default function PluginCard({ msg }: { msg: MessageType }) {
  if (!msg.pluginData || !msg.pluginName) return null;

  const { pluginName, pluginData } = msg;

  switch (pluginName) {
    case "weather":
      return (
        <div className="bg-blue-100 p-4 rounded shadow my-2">
          <h2 className="font-bold text-lg">Weather in {pluginData.name}</h2>
          <p>{pluginData.weather}</p>
          <p>Temperature: {pluginData.temp}°C</p>
        </div>
      );
    case "calc":
      return (
        <div className="bg-green-100 p-4 rounded shadow my-2">
          <h2 className="font-bold text-lg">Result:</h2>
          <p>{pluginData.result}</p>
        </div>
      );
    case "define":
      return (
        <div className="bg-purple-100 p-4 rounded shadow my-2">
          <h2 className="font-bold text-lg">{pluginData.word}</h2>
          <p>{pluginData.definition}</p>
        </div>
      );
    default:
      return null;
  }
}
