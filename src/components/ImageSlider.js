import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.lenth <= 0) {
    return null;
  }
  console.log(current);

  return (
    <div className="slider h-40 flex justify-center items-center w-full">
      <FaArrowAltCircleLeft
        className="left-arrow absolute left-4 cursor-pointer select-none"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="right-arrow absolute right-4 cursor-pointer select-none"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel" className="h-52 w-full " />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
