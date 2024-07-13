import React, { useState, useEffect } from 'react';

const Heroslider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2500);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="slider flex w-full h-[400px]">
      <div className="slider-wrapper relative w-full h-full ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slides flex flex-1 absolute overflow-hidden w-full h-full
                         transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-1000' : 'opacity-0'
            }`}
          >
            <img src={image.image} className="w-full h-full object-cover" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heroslider;
