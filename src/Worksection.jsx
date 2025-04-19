// src/components/HowItWorksSection.js
const Worksection = () => {
    return (
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
                Our AI engine processes your input and transforms it into stunning visuals, animations, and transitions.
              </p>
            </div>
  
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 text-white p-6 rounded-full mb-4">
                <span className="text-3xl">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Download & Share</h3>
              <p className="text-lg text-gray-700">
                Once the video is generated, you can download it and use it for your projects, marketing, or personal use.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Worksection;
  