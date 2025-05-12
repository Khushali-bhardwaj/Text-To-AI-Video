import React, { useState } from "react";

import bgImage from "./assets/frontBg.jpg";
import bgImage2 from "./assets/bgImg2.jpg";
import visualImage from "./assets/image2.jpg";
import bannerImage from "./assets/bannerImg.jpg";

import { Link } from "react-router";




const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}


const Section1 = () => {

  return (
    <div className="relative w-full  min-h-screen text-white font-sans overflow-x-hidden scroll-smooth">
      {/* Background Image */}
      <div className="overflow-clip">
      <img
        src={bgImage}
        alt="Background"
        className="fixed top-0 w-full h-full object-cover  transition-opacity duration-1000"
      />
      </div>


      {/* Hero Section */}
      <div className="relative z-10 bg-black/50 flex items-center justify-center h-fit py-20 md:py-40 px-6 ">
      
        <div className=" ">
          <div className="rounded-md  p-8 md:scale-105 max-w-md transform transition duration-500 md:hover:scale-110">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInDown">Motion Script</h2>
            <p className="text-lg mb-6 text-gray-200 animate-fadeInUp">
              Transform your text into stunning videos effortlessly.
            </p>
            <Link to={'/mvr'} className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold transition-transform duration-300 hover:scale-105 text-sm md:text-lg">
              Make your Vision Real
            </Link>
          </div>
        </div>
      </div>

      {/* Text to Visual Section */}
      <div className="relative z-10 bg-white text-black px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 transition duration-500 ease-in-out transform hover:scale-[1.01]">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Transform text into visuals</h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              AI Video Generator brings your ideas to life! Located in Patna, IN, our innovative
              platform allows you to input any video scenario in a simple text box. Our advanced
              technology will generate high-quality videos tailored to your description.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={bgImage2}
              alt="AI visual"
              className="w-full rounded-lg shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
