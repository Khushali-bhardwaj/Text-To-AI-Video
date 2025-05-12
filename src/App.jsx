// src/App.js (or your main file)
import React from "react";
import Section1 from "./Section1";
import About from "./About"; // import AboutSection
import Worksection from "./Worksection"; // import HowItWorksSection
import MakeVisionReal from "./MakeVisionReal";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Routes >
     
        <Route path="/" element={  <Section1 /> } />
        <Route path="/home" element={  <Section1 /> } />
        <Route path="/about" element={ <About />} />
        <Route path="/howitworks" element={ <Worksection /> } />
        <Route path="/mvr" element={ <MakeVisionReal /> } />
       
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

