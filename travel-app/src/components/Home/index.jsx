import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import CountryCard from '../partials/CountryCard';

import { COUNTRY_IDS } from '../../data/constants';

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
          {COUNTRY_IDS.map((id) => (
            <CountryCard id={id} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
}
