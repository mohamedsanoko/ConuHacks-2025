import React from 'react';

const Prompt = () => {
  return (
    <div className="text-center my-8">
      <p className="text-xl text-gray-700 mb-4">
        Ready to work smarter? Click below to start recording your habits!
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
        Start Recording
      </button>
    </div>
  );
};

export default Prompt;