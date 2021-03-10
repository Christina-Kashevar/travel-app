import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SliderCard from './SliderCard';
import info from './info'

import './index.css';

import img1 from '../../../assets/images/sightseen/italy-colosseum.jpg'
import img2 from '../../../assets/images/sightseen/italy-florence-duomo-santa-maria-del-fiore.jpg'
import img3 from '../../../assets/images/sightseen/italy-leaning-tower-of-pisa.jpg'
import img4 from '../../../assets/images/sightseen/italy-milan-duomo-facade.jpg'
import img5 from '../../../assets/images/sightseen/italy-pompeii-mt-vesuvius.jpg'
import img6 from '../../../assets/images/sightseen/italy-venice-canals.jpg'

export default function SliderComponent(props) {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  let slider1;
  let slider2;

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsSmall = {
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div >
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={slider => (slider1 = slider)}
        className={'slider-large'}
      >
        {info.map((card) => (
          < SliderCard
            key={card.img}
            imgUrl={card.img}
            name={card.name}
            description={card.description}
            size={'large'} />
        ))}
      </Slider>
      <Slider
          {...settingsSmall}
          className={'slider-small'}
          asNavFor={nav1}
          ref={slider => (slider2 = slider)}
        >
          { info.map((card) => (
            < SliderCard key={card.img} imgUrl={card.img} size={'small'}/>
           )) }
        </Slider>
    </div>
  );
}

