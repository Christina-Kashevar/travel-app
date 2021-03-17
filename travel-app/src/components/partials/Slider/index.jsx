import React, { useState, useEffect, useCallback } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SliderCard from './SliderCard';
import RatingTable from '../RatingTable';

import './index.css';
import useStyles from './style';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import { Grid, IconButton } from '@material-ui/core';

export default function SliderComponent(props) {
  const { sights } = props;
  const [ratingValue, setRatingValue] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [openRatingTable, setOpenRatingTable] = useState(false);
  const handleFs = useFullScreenHandle();
  const [fsState, setFsState] = useState(handleFs.active);
  const classes = useStyles();

  const handleValueChange = (event, newValue) => {
    setRatingValue(newValue);
  };

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

  const trackFs = useCallback((state) => setFsState(state), []);
  const toggleFs = () => {
    if (handleFs.active) {
      handleFs.exit();
      return;
    }
    handleFs.enter();
  };

  return (
    <div>
      <FullScreen handle={handleFs} onChange={trackFs}>
        { openRatingTable && <RatingTable handleClose={setOpenRatingTable}/> }
        <Grid className={classes.fsWrapper}>
          <IconButton onClick={toggleFs} className={classes.fsButton} color="primary">
            {fsState ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </Grid>
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={slider => (slider1 = slider)}
            className={'slider-large'}
          >
            {sights.map((card) => (
              < SliderCard
                key={card.linkToPhoto}
                imgUrl={card.linkToPhoto}
                name={card.name}
                description={card.description}
                size={'large'}
                value={ratingValue}
                handleValueChange={handleValueChange}
                handleBackdrop={setOpenRatingTable}
              />
            ))}
          </Slider>
      </FullScreen>
      <Slider
      {...settingsSmall}
      className={'slider-small'}
      asNavFor={nav1}
      ref={slider => (slider2 = slider)}
    >
      { sights.map((card) => (
        < SliderCard key={card.linkToPhoto} imgUrl={card.linkToPhoto} size={'small'}/>
      )) }
    </Slider>
  </div>
  );
}

