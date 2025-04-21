// src/MakeVisionReal.js
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const MakeVisionReal = () => {
  const [input, setInput] = useState("");
  const [sentMsg, setSentMsg] = useState('');

  const handleSend = () => {
    const msg =input.trim();
    if (msg && msg != '') {
      // alert(`You typed: ${input}`);
      setSentMsg(msg)
      setInput(""); // Clear input after sending

    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-black to-gray-900 text-white flex items-center justify-center px-4">
      <IoMdArrowRoundBack className="fixed top-0 mt-4"/>
      {/* Full-screen Chat-style Card */}
      <div className="">
        <div className={`${sentMsg && 'hidden'}`}>
          <h2 className="text-3xl font-bold text-white mb-6 animate-fadeInDown">
            Make Your Vision Real
          </h2>
          <p className="text-gray-300 mb-6 animate-fadeInUp">
            Tell us what you want to create and we’ll bring it to life with AI-powered video generation.
          </p>
        </div>

        {/* Chat-style Input */}
        <div className={`flex pl-4 pr-1 py-1 md:pl-6 md:pr-4 md:py-2 text-sm md:text-lg items-center gap-3 justify-between space-x-4 rounded-full  bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300  ${sentMsg && 'fixed mx-auto bottom-0 left-0 right-0 w-fit mb-4 justify-center'}`}>
          <input
            type="text"
            placeholder="Type your video idea here..."
            className=" outline-none focus:outline-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-5 py-3 rounded-full font-medium hover:bg-green-700 transition-all duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeVisionReal;
