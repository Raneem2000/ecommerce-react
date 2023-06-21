import React from "react";
import "./Slider.css";
import leftArrow from "./icons/caret-left-svgrepo-com.svg";
import rightArrow from "./icons/caret-right-svgrepo-com.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img  alt ='fp' src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}