// src/components/AboutSection.js
const About = () => {
    return (
      <div id="about" className="bg-gray-100 text-black py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            AI Video Generator is revolutionizing the way videos are created. With our innovative technology,
            we transform your text-based scenarios into high-quality video content. Whether you're a business
            looking to create marketing videos, an educator making learning materials, or someone who just wants
            to bring their ideas to life, our platform makes it easy and fast.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our team of experts is continuously improving the AI models behind our platform to ensure that
            every video generated is unique, engaging, and meets the highest standards. Start creating stunning videos
            today with just a few simple words!
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  