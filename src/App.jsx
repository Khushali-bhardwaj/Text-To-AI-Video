// src/App.js (or your main file)
import React from "react";
import Section1 from "./Section1";
import About from "./About"; // import AboutSection
import Worksection from "./Worksection"; // import HowItWorksSection
import MakeVisionReal from "./MakeVisionReal";

const App = () => {
  return (
    <div>
      <Section1 />
      <About />  {/* Add AboutSection here */}
      <Worksection />  {/* Add HowItWorksSection here */}
      <MakeVisionReal />
    </div>
  );
};

export default App;

