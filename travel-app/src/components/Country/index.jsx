import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer'

export default function Country() {
  let { id } = useParams();
  return (
    <Grid>
      <Header pageName={id} />
      <Typography variant="h3">{id}</Typography>
      <Footer />
    </Grid>
  );
}
