import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { getCountryById } from '../../../engine';

import { Typography, Card, CardContent } from '@material-ui/core';


export default function DateWidget({id, lang}) {
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [dayAndMonth, setDayAndMonth] = useState(null);
  const [time, setTime] = useState(null);

  const classes = useStyles();
  const country = getCountryById(id);

  let localLang;
  switch(lang) {
    case 'ru':
      localLang = 'ru-RU';
      break;
    default:
      localLang = 'en-GB';
  }

  useEffect(() => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute:'numeric',
      second:'numeric',
      timeZone: country.timeZone
    };

    const oneSecInterval = setInterval(() => {
      const date = (new Date()).toLocaleString(localLang, options).split(',');
      setDayOfWeek(date[0]);
      setDayAndMonth(`${date[1].trim().split(' ')[0]} ${date[1].trim().split(' ')[1]}`);
      setTime(date[2]);
    }, 1000);

    return () => clearInterval(oneSecInterval);
  }, [localLang, country.timeZone]);

  let infoToRender = (<p className={classes.root}>Loading....</p>);

  if(dayOfWeek && dayAndMonth && time) {
    infoToRender = (
      <Card className={classes.root}>
        <CardContent className={classes.flex}>
          <Typography className={classes.text}>{`${dayAndMonth}, ${dayOfWeek}`}</Typography>
          <Typography className={classes.text}>{time}</Typography>
        </CardContent>
      </Card>
    )
  }

  return infoToRender;
}