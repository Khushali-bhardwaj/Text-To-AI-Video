import React, { useState } from "react";
import bgImage from "./assets/image1.jpg";
import visualImage from "./assets/image2.jpg";

const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen text-white font-sans overflow-x-hidden bg-black scroll-smooth">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute w-full h-full object-cover opacity-80 transition-opacity duration-1000"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Navigation Bar */}
      <div className="relative z-20 flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold tracking-wide transition-all duration-500 hover:scale-105 cursor-pointer">
          AI VIDEO GENERATOR
        </h1>
        <button
          className="text-white text-3xl font-bold focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Slide-in Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white text-black z-50 transform transition-all duration-500 ease-in-out origin-left ${
          menuOpen ? "translate-x-0 scale-100 opacity-100" : "-translate-x-full scale-90 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
        </div>

        <nav className="flex flex-col mt-6 space-y-5 px-6 text-lg font-medium">
          <a href="#about" className="hover:text-green-600 transition duration-300">About</a>
          <a href="#howitworks" className="hover:text-green-600 transition duration-300">How It Works</a>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center h-screen px-6 md:px-20">
        <div className="bg-black bg-opacity-70 p-8 rounded-xl max-w-md shadow-xl transform transition duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold mb-4 animate-fadeInDown">Motion Script</h2>
          <p className="text-lg mb-6 text-gray-200 animate-fadeInUp">
            Transform your text into stunning videos effortlessly.
          </p>
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold transition-transform duration-300 hover:scale-105">
            Make your Vision Real
          </button>
        </div>
      </div>

      {/* Text to Visual Section */}
      <div className="relative z-10 bg-white text-black px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 transition duration-500 ease-in-out transform hover:scale-[1.01]">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform text into visuals</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              AI Video Generator brings your ideas to life! Located in Patna, IN, our innovative
              platform allows you to input any video scenario in a simple text box. Our advanced
              technology will generate high-quality videos tailored to your description.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={visualImage}
              alt="AI visual"
              className="w-full rounded-lg shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-gray-100 text-black py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            AI Video Generator is revolutionizing the way videos are created. Using state-of-the-art
            AI technology, we transform simple text into dynamic, high-quality videos that can be
            used for education, business, entertainment, and more.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our team of experts is continuously improving the AI models behind our platform to ensure
            the best possible video outputs. We are proud to be at the forefront of AI-driven video
            innovation.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="howitworks" className="bg-white text-black py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 text-white p-6 rounded-full mb-4">
                <span className="text-3xl">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Enter Your Text</h3>
              <p className="text-lg text-gray-700">
                Simply type your video description or scenario in our easy-to-use text box.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 text-white p-6 rounded-full mb-4">
                <span className="text-3xl">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI Processing</h3>
              <p className="text-lg text-gray-700">
                Our AI engine processes your input and transforms it into stunning visuals, animations,
                and transitions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 text-white p-6 rounded-full mb-4">
                <span className="text-3xl">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Download & Share</h3>
              <p className="text-lg text-gray-700">
                Once the video is generated, you can download it and use it for your projects,
                marketing, or personal use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
