import React from "react";
import { FaCog, FaMobileAlt, FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer a wide range of services to cater to your business needs. From development to design, we have the expertise to deliver top-notch solutions.
        </p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1: Web Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <FaCode className="text-4xl text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Web Development</h3>
            <p className="text-gray-600">
              We create modern and responsive websites that provide an excellent user experience and help your business succeed online.
            </p>
          </div>

          {/* Service 2: Mobile App Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <FaMobileAlt className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mobile App Development</h3>
            <p className="text-gray-600">
              We build user-friendly mobile apps for both Android and iOS platforms to help you reach a larger audience.
            </p>
          </div>

          {/* Service 3: IT Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <FaCog className="text-4xl text-yellow-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">IT Solutions</h3>
            <p className="text-gray-600">
              We provide comprehensive IT solutions to streamline your operations, improve efficiency, and reduce costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
