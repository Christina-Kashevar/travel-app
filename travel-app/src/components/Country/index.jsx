import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import DateWidget from '../widgets/Date';

import { getCountryById } from '../../engine';

export default function Country() {
  const { id } = useParams();
  const country = getCountryById(id);

  return (
    <Grid>
      <Header pageName={country.name} />
      <Typography variant="h3">{country.name}</Typography>
      <DateWidget id={id} lang={'en'}/>
      <Footer />
    </Grid>
  );
}
