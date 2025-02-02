import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-4 flex justify-between items-center w-full shadow-lg">

      <div className="text-3xl font-extrabold text-white cursor-pointer hover:text-gray-300 transition duration-300">
        Straight-Up
      </div>


      <div className="hidden md:flex gap-6 text-lg text-white">
        <a href="#features" className="hover:text-gray-300 transition duration-300">Features</a>
        <a href="#about" className="hover:text-gray-300 transition duration-300">About</a>
        <a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a>
      </div>


      <div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
