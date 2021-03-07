import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import useStyles from './styles';
import WeatherCard from './Card';
import {REACT_APP_WEATHER_KEY} from '../../../data/constants';
function Weather({ capital }) {
  const [weatherData, setWeatherData] = useState(null);
  const classes = useStyles();
  const params = {
    access_key: REACT_APP_WEATHER_KEY,
    query: capital,
  }
  useEffect(() => {
    axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    setWeatherData(response.data);
  }).catch(error => {
    console.log(error);
  });
}, [capital]);

  return (
    <Card className={classes.root}>
      <WeatherCard weatherData={weatherData}/>
    </Card>
  );
}

export default Weather;
