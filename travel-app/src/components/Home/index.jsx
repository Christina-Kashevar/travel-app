import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer'
import CountryCard from '../partials/CountryCard'

const countryIDs = [
  'France',
  'Italy',
  'Russia',
  'Mexico',
  'Greece',
  'India',
  'Egypt',
  'China',
];

export default function Country() {
  return (
    <Grid>
      <Header pageName="Travel App" />
      <Container>
      <Typography variant="h3">Home</Typography>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {countryIDs.map(id => (
            <CountryCard id={id} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
}
