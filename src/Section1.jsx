import React, { useState } from "react";
import bgImage from "./assets/image1.jpg";
import visualImage from "./assets/image2.jpg";
import { Link } from "react-router";

const Section1 = () => {

  return (
    <div className="relative w-full min-h-screen text-white font-sans overflow-x-hidden bg-black scroll-smooth">
      {/* Background Image */}
      {/* <img
        src={bgImage}
        alt="Background"
        className="absolute w-full h-full object-cover opacity-80 transition-opacity duration-1000"
      /> */}

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}

     

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center h-screen px-6 md:px-20 bg-gradient-to-r from-black to-gray-900 text-white">
        {/* <img src={bgImage} className="absolute inset-0 w-full h-full object-cover  " alt="banner-img" /> */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
        <div className="bgblack bg-opacity-70 p-8 rounded-xl md:scale-105 max-w-md shadow-xl transform transition duration-500 md:hover:scale-110">
          <h2 className="text-4xl font-bold mb-4 animate-fadeInDown">Motion Script</h2>
          <p className="text-lg mb-6 text-gray-200 animate-fadeInUp">
            Transform your text into stunning videos effortlessly.
          </p>
          <Link to={'/mvr'} className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold transition-transform duration-300 hover:scale-105 text-sm md:text-lg">
            Make your Vision Real
          </Link>
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
      {/* <div id="about" className="bg-gray-100 text-black py-20">
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
      </div> */}

      {/* How It Works Section */}
      {/* <div id="howitworks" className="bg-white text-black py-20">
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
      </div> */}
    </div>
  );
};

export default Section1;
