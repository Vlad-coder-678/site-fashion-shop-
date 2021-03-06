import React, { useState, useEffect, useRef } from "react";

import {
  ellipse1,
  ellipse2,
  ellipse3,
  ellipse4,
} from "../assets/images/OurTeamPage";

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const sliderEl = useRef([]);
  const [dots, setDotes] = useState([]);
  const dotsEl = useRef([]);
  useEffect(() => {
    setSlides(Array.prototype.slice.call(sliderEl.current.children));
  }, []);
  useEffect(() => {
    setDotes(Array.prototype.slice.call(dotsEl.current.children));
  }, []);

  const showSlides = (index) => {
    slides.map((slide, i) =>
      i === index
        ? (slide.style.display = "block")
        : (slide.style.display = "none")
    );
    dots.map((dot, ind) =>
      ind === index
        ? (dot.className = "slider__dot slider__dot__active")
        : (dot.className = "slider__dot")
    );
  };

  const clickPrev = () => {
    currSlide <= 0
      ? setCurrSlide(slides.length - 1)
      : setCurrSlide(currSlide - 1);
  };

  const clickNext = () => {
    currSlide + 1 >= slides.length
      ? setCurrSlide(0)
      : setCurrSlide(currSlide + 1);
  };

  const currentSlide = (index) => {
    setCurrSlide(index);
    showSlides(index);
  };

  showSlides(currSlide);

  return (
    <div className="slider__outer">
      <button
        className="slider__button slider__button__prev"
        onClick={() => {
          clickPrev();
        }}
      >
        Prev
      </button>
      <div className="slider" ref={sliderEl}>
        <img className="slider__inner" src={ellipse1} alt={"ellipse1"} />
        <img className="slider__inner" src={ellipse2} alt={"ellipse2"} />
        <img className="slider__inner" src={ellipse3} alt={"ellipse3"} />
        <img className="slider__inner" src={ellipse4} alt={"ellipse4"} />
      </div>
      <button
        className="slider__button slider__button__next"
        onClick={() => {
          clickNext();
        }}
      >
        Next
      </button>
      <div className="slider__dots" ref={dotsEl}>
        <span
          className="slider__dot"
          onClick={() => {
            currentSlide(0);
          }}
        ></span>
        <span
          className="slider__dot"
          onClick={() => {
            currentSlide(1);
          }}
        ></span>
        <span
          className="slider__dot"
          onClick={() => {
            currentSlide(2);
          }}
        ></span>
        <span
          className="slider__dot"
          onClick={() => {
            currentSlide(3);
          }}
        ></span>
      </div>
    </div>
  );
};

export default Slider;
