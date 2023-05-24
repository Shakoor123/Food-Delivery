import React, { useState, useEffect } from "react";
import "./Slide.css";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickDot = (index) => {
    setActiveIndex(index);
  };
  const interval = 3000;
  const slides = [
    {
      title: "Leave reviews for all meals",
      text: "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.",
    },
    {
      title: "Leave reviews for all meals 2",
      text: "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.",
    },
    {
      title: "Leave reviews for all meals 3",
      text: "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.",
    },
    {
      title: "Leave reviews for all meals 4",
      text: "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.",
    },
  ];
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);
  return (
    <div className="slide-container">
      <div className="slide-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <h4 className="slideTitle">{slide.title}</h4>
            <span className="slideText">{slide.text}</span>
          </div>
        ))}
      </div>
      <div className="dot-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleClickDot(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
