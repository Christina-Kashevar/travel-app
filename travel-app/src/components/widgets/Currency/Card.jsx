import React from 'react';
import {
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  CardMedia,
} from '@material-ui/core';
import usaIcon from '../../../assets/images/usa.png';
import ecIcon from '../../../assets/images/ecIcon.png';
import rubIcon from '../../../assets/images/rubIcon.png';
import useStyles from './styles';
const CurrencyCard = ({ currencyData, currencyCod }) => {
  const classes = useStyles();
  return !currencyData ? (
    <p>Loading...</p>
  ) : (
    <CardMedia className={classes.app}>
      <Grid className={classes.main}>
        <Grid className={classes.cyrrencyCod}>{currencyCod}</Grid>
        {currencyData.map((el, i) => {
          return (
            <List key={i} style={{padding: '0'}}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={el.key==='USD'?usaIcon:el.key==='EUR'?ecIcon:rubIcon}/>
                </ListItemAvatar>
                <ListItemText primary={<Typography className={classes.currency}>{el.key}</Typography>} secondary={<Typography className={classes.currency}>{el.value}</Typography>} />
              </ListItem>
            </List>
          );
        })}
        {/*<Grid className={classes.location}>
          {weatherData.location.name}, {weatherData.location.country}
        </Grid>
        <Grid className={classes.weatherBox}>
          <Grid className={classes.temp}>
            {Math.round(weatherData.current.temperature)}°c
          </Grid>
          <Grid className={classes.weather}>
            <img className={classes.img} src={weatherData.current.weather_icons} />
          </Grid>
  </Grid>*/}
      </Grid>
    </CardMedia>
  );
};

CurrencyCard.propTypes = {};

export default CurrencyCard;
