import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -right-4 top-1/2 -translate-y-1/2 cursor-pointer z-10"
  >
    <FaChevronRight className="text-white text-3xl drop-shadow-lg" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -left-4 top-1/2 -translate-y-1/2 cursor-pointer z-10"
  >
    <FaChevronLeft className="text-white text-3xl drop-shadow-lg" />
  </div>
);

const SliderComponent = ({ sliderData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-[90%] mx-auto  relative">
      <Slider {...settings}>
        {sliderData?.map((item, index) => (
          <div key={index}>
            <img
              src={item.gameImg}
              alt={item.gameName}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderComponent;
