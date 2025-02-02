import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  return (
    <div className="relative text-center">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        className="mt-4"
      >

        <div className="relative">
          <img
            src="https://th.bing.com/th/id/R.2e40b892590b28f8d2873f771c371aa7?rik=USeFIzmdmifQTg&pid=ImgRaw&r=0"
            alt="Stay Healthy"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-3xl font-bold mb-4">Stay Healthy While Working</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
              Improve Posture Now!
            </button>
          </div>
        </div>


        <div className="relative">
          <img
            src="https://th.bing.com/th/id/R.fed7c56fea7b7bab121503eb62e1c14e?rik=nlTlKVT7pW6Kgg&pid=ImgRaw&r=0"
            alt="Take Breaks"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-3xl font-bold mb-4">Take Breaks Regularly</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>


        <div className="relative">
          <img
            src="https://th.bing.com/th/id/R.26ac2666f1ac3949b529b2db5aef3e93?rik=fldbp4sFPN65ug&pid=ImgRaw&r=0"
            alt="Stay Hydrated"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-3xl font-bold mb-4">Drink Water and Stay Hydrated</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
              Hydration Tips
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
