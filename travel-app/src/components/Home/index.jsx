import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';

export default function Country() {
  return (
    <Grid>
      <Header pageName="Travel App" />
      <Typography variant="h3">Home</Typography>
      <Link to="/country">Country</Link>
    </Grid>
  );
}
