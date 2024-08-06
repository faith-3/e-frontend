import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "John Doe",
    country: "USA",
    rating: 4.8,
    feedback: "Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue. Felis elit aliquet gravida est sit. Auctor quis viverra magna quam. Eget fusce feugiat scelerisque sit quis sed nunc eu. Convallis quam rhoncus lectus tristique elit at massa. Ullamcorper ullamcorper feugiat aliquet proin sed libero nunc tellus."
  },
  {
    name: "Claire Walts",
    country: "France",
    rating: 4.8,
    feedback: "Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue. Felis elit aliquet gravida est sit. Auctor quis viverra magna quam. Eget fusce feugiat scelerisque sit quis sed nunc eu. Convallis quam rhoncus lectus tristique elit at massa. Ullamcorper ullamcorper feugiat aliquet proin sed libero nunc tellus."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-semibold mb-4">Our Customer Testimonials</h2>
      <div className="relative flex items-center">
        <button onClick={handlePrev} className="absolute left-0 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          &#10094;
        </button>
        <div className="w-96 p-4 mx-8 bg-white shadow-lg rounded-lg">
          <div className="flex items-center mb-2">
            <div className="bg-gray-300 h-10 w-10 rounded-full mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].country}</p>
              <div className="flex items-center">
                {[...Array(5)].map((star, index) => (
                  <FaStar
                    key={index}
                    className={`h-4 w-4 ${index < Math.round(testimonials[currentIndex].rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{testimonials[currentIndex].rating}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">{testimonials[currentIndex].feedback}</p>
        </div>
        <button onClick={handleNext} className="absolute right-0 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          &#10095;
        </button>
      </div>
      <div className="flex mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
