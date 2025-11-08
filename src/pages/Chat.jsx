import { useState } from "react";
import axios from "axios";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", { message: input });
      const botMessage = { role: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "bot", text: "Error getting response 😢" }]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-4">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
           MSME Chatbot
        </h1>
        <div className="h-96 overflow-y-auto border p-3 rounded-lg mb-3 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`my-2 p-2 rounded-lg ${
                msg.role === "user" ? "bg-blue-100 text-right" : "bg-green-100 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <div className="text-gray-500 italic">Thinking...</div>}
        </div>
        <div className="flex">
          <input
            className="flex-1 border rounded-l-lg p-2 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
            onClick={sendMessage}
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
