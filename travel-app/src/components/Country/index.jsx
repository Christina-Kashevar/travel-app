import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';

export default function Country() {
  return (
    <Grid>
      <Header pageName="Country" />
      <Typography variant="h3">Country</Typography>
    </Grid>
  );
}
