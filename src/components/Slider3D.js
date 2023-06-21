import "./Slider3D.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../assets/images/bags/f.jpg";
import celebrating from "../assets/images/bags/f.jpg";
import education from "../assets/images/bags/bg.jpg";
import taken from "../assets/images/bags/bg.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

function Slider3D() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slider3D;