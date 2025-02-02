import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-8">
      <p className="text-lg font-semibold">© 2025 Straight-Up. All rights reserved.</p>
      <p className="text-sm text-gray-400 mt-2">Made with ❤️ for better work habits.</p>


      <div className="flex justify-center mt-4 space-x-6">
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
