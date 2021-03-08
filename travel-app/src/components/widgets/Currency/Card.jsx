import React from 'react';
import {
  Grid,
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
const CurrencyCard = ({ currencyData, currencyCod, lang }) => {
  const classes = useStyles();
  return !currencyData ? (
    <p>Loading...</p>
  ) : (
    <CardMedia className={classes.app}>
      <Grid className={classes.main}>
      <Grid className={classes.currencyCod}>
        1 {currencyCod}
        </Grid>
        {currencyData.map((el, i) => {
          let currencyLang = '';
          if (lang === 'ru') {
            if (el.key === 'USD') currencyLang = 'долл. США';
            if (el.key === 'EUR') currencyLang = 'ЕВРО';
            if (el.key === 'RUB') currencyLang = 'pocc. руб.';
          }
          if (lang === 'zh') {
            if (el.key === 'USD') currencyLang = '美元';
            if (el.key === 'EUR') currencyLang = '歐元';
            if (el.key === 'RUB') currencyLang = '俄羅斯盧布';
          }
          if (lang === 'en') currencyLang = el.key;
          return (
            <List key={i} style={{ padding: '0' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    src={
                      el.key === 'USD'
                        ? usaIcon
                        : el.key === 'EUR'
                        ? ecIcon
                        : rubIcon
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.currency}>
                      {currencyLang}
                    </Typography>
                  }
                  secondary={
                    <Typography className={classes.currency}>
                      {el.value}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          );
        })}
      </Grid>
    </CardMedia>
  );
};

CurrencyCard.propTypes = {};

export default CurrencyCard;
