// src/MakeVisionReal.js
import React, { useState } from "react";

const MakeVisionReal = () => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      alert(`You typed: ${input}`);
      setInput(""); // Clear input after sending
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-black to-gray-900 text-white flex items-center justify-center px-4">
      {/* Full-screen Chat-style Card */}
      <div className="bg-black bg-opacity-80 p-8 rounded-2xl w-full max-w-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 animate-fadeInDown">
          Make Your Vision Real
        </h2>
        <p className="text-gray-300 mb-6 animate-fadeInUp">
          Tell us what you want to create and we’ll bring it to life with AI-powered video generation.
        </p>

        {/* Chat-style Input */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Type your video idea here..."
            className="flex-grow px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeVisionReal;
