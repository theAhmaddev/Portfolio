import React from "react";

const Hero = () => {
  return (
    <section
      className="h-[800px] flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:px-16"
      id="home"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 mx-auto  lg:px-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-700">
            Hi, I'm Muhammad Ahmad
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            Flutter Developer
          </p>
          <div className="flex flex-col text-[14px] lg:text-[16px] sm:flex-row gap-4 sm:space-x-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-60 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:h-90 lg:w-90 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://avatars.githubusercontent.com/u/198794480?v=4" // replace with your image path
              alt="Muzamil Hussain"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
