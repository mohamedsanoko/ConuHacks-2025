import React from 'react';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-6">

      <div className="bg-white p-10 rounded-3xl shadow-lg shadow-gray-300">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-700">
          Improve Your Posture
        </h1>
        <p className="text-lg max-w-xl text-center text-gray-500 mb-6">
          Stay aware of your posture with real-time feedback. Reduce back pain, improve productivity, and maintain a healthier lifestyle.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-inner shadow-blue-300 hover:shadow-blue-400 hover:bg-blue-600 transition-all duration-300">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
