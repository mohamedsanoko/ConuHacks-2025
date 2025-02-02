import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  return (
  <Carousel
  showThumbs={false}
  infiniteLoop={true}
  autoPlay={true}
  interval={5000}
  showStatus={false}
  className="mt-4"
>
  <div>
    <img
      src="https://th.bing.com/th/id/R.2e40b892590b28f8d2873f771c371aa7?rik=USeFIzmdmifQTg&pid=ImgRaw&r=0"
      alt="Slide 1"
      className="w-24 h-auto object-cover"
    />
    <p className="legend text-white text-2xl font-bold text-center bg-black bg-opacity-50 p-2 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
      Stay Healthy While Working  {/* Reduced font size and padding */}
    </p>
  </div>
  <div>
    <img
      src="https://th.bing.com/th/id/R.fed7c56fea7b7bab121503eb62e1c14e?rik=nlTlKVT7pW6Kgg&pid=ImgRaw&r=0"
      alt="Slide 2"
      className="w-24 h-auto object-cover"  
    />
    <p className="legend text-white text-2xl font-bold text-center bg-black bg-opacity-50 p-2 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
      Take Breaks Regularly  {/* Reduced font size and padding */}
    </p>
  </div>
  <div>
    <img
      src="https://th.bing.com/th/id/R.26ac2666f1ac3949b529b2db5aef3e93?rik=fldbp4sFPN65ug&pid=ImgRaw&r=0"
      alt="Slide 3"
      className="w-24 h-auto object-cover" 
    />
    <p className="legend text-white text-2xl font-bold text-center bg-black bg-opacity-50 p-2 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
      Drink Water and Stay Hydrated  {/* Reduced font size and padding */}
    </p>
  </div>
</Carousel>
  );
};

export default Hero;