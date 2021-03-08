import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import useStyles from './styles';
import CurrencyCard from './Card';

function Currency({ currencyCod }) {
  const [currencyData, setCurrencyData] = useState(null);
  const currencyFindCode = ['EUR', 'USD', 'RUB'];
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${currencyCod}`)
      .then((response) => {
        const result = [];
        for (let key in response.data.rates) {
          if (response.data.rates.hasOwnProperty(key)) {
            currencyFindCode.forEach((el) => {
              if (el === key&& el!==currencyCod)
                result.push({
                  key: `${key}`,
                  value: `${response.data.rates[key]}`,
                });
            });
          }
        }
        setCurrencyData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card className={classes.root}>
      <CurrencyCard currencyData={currencyData} currencyCod={currencyCod} />
    </Card>
  );
}

export default Currency;
