import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 rounded-3xl shadow-lg shadow-gray-300 mx-6 mt-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-2xl font-extrabold text-gray-700 cursor-pointer hover:opacity-80 transition duration-300">
        Straight-Up
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-lg text-gray-600">
        <a href="#features" className="hover:text-gray-700 transition duration-300">
          Features
        </a>
        <a href="#about" className="hover:text-gray-700 transition duration-300">
          About
        </a>
        <a href="#contact" className="hover:text-gray-700 transition duration-300">
          Contact
        </a>
      </div>

      {/* CTA Button */}
      <div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-inner shadow-blue-300 hover:bg-blue-600 hover:shadow-blue-400 transition-all duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
