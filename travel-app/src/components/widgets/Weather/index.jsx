import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import useStyles from './styles';
import WeatherCard from './Card';
import { REACT_APP_WEATHER_KEY } from '../../../data/constants';

function Weather({ capital }) {
  const [weatherData, setWeatherData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${REACT_APP_WEATHER_KEY}&lang=en`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [capital]);

  return (
    <Card className={classes.root}>
      <WeatherCard weatherData={weatherData} />
    </Card>
  );
}

export default Weather;
