import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    // Go to the previous image, or loop to the last image if at the start
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    // Go to the next image, or loop to the first image if at the end
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevClick}
      />

      {/* Display the current image */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="slide"
      />

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNextClick}
      />
    </div>
  );
};
