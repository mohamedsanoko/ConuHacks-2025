import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white mt-10 mx-6 p-6 rounded-3xl shadow-lg shadow-gray-300 text-center">
      <p className="text-gray-600 font-medium">
        © 2025 Straight-Up. All rights reserved.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Made with ❤️ for better work habits.
      </p>


      <div className="flex justify-center mt-4 space-x-6">
        <a href="#" className="hover:text-blue-500 transition duration-300">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
        <a href="#" className="hover:text-blue-500 transition duration-300">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="hover:text-blue-500 transition duration-300">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
