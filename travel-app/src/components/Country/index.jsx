import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

import { getCountryById } from '../../engine';
import Weather from '../widgets/Weather/index';
import Currency from '../widgets/Currency/index';
export default function Country() {
  const { id } = useParams();
  const country = getCountryById(id);
  return (
    <Grid>
      <Header pageName={country.name} />
      <Typography variant="h3">{country.name}</Typography>
      <Weather capital={country.capital}/>
      <Currency currencyCod={country.currency}/>
      <Footer />
    </Grid>
  );
}
