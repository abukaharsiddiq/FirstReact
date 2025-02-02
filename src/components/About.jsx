import React from "react";
import { FaUserAlt, FaIndustry, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://anindabangla.com/back-end/news/1738480643.ijtema.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Right Side: Title, Description, Button */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We are a passionate team dedicated to delivering innovative solutions that help your business grow and succeed. With years of experience, we bring knowledge, expertise, and commitment to every project.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
