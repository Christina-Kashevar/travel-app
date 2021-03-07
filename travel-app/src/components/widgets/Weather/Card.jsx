import React from 'react';
import { Grid, Button, IconButton, Typography,  CardMedia } from '@material-ui/core';
import useStyles from './styles';
import cold from '../../../data/cold-bg.jpg';
import warm from '../../../data/warm-bg.jpg';
const WeatherCard = ({ weatherData }) => {
  const classes = useStyles();
  return !weatherData ? (
    <p>Loading...</p>
  ) : (
    <CardMedia className={classes.app} image={(weatherData.current.temperature>16)?warm:cold}>
      <Grid className={classes.main}>
        <Grid className={classes.location}>
          {weatherData.location.name}, {weatherData.location.country}
        </Grid>
        <Grid className={classes.weatherBox}>
          <Grid className={classes.temp}>
            {Math.round(weatherData.current.temperature)}°c
          </Grid>
          <Grid className={classes.weather}>
            <img className={classes.img} src={weatherData.current.weather_icons} />
          </Grid>
        </Grid>
      </Grid>
    </CardMedia>
  );
};

WeatherCard.propTypes = {};

export default WeatherCard;
