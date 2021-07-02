import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './Carousel.css';

const Carousel = () => {
  const images = [
    {
      image:
        'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1601153211050-ae2e1fa428d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];
  const [caroImg, setCaroImg] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCaroImg(caroImg === length - 1 ? 0 : caroImg + 1);
  };
  const prevSlide = () => {
    setCaroImg(caroImg === 0 ? length - 1 : caroImg - 1);
  };
  return (
    <div className="carousel">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
      {images.map((image, index) => {
        return (
          <div key={index} className={index === caroImg ? 'image active' : 'image'}>
            {index === caroImg && (
              <img src={image.image} alt="Computer" className="image carousel-image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
