import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import DateWidget from '../widgets/Date';

import { getCountryById } from '../../engine';
import Weather from '../widgets/Weather';
export default function Country() {
  const { id } = useParams();
  const country = getCountryById(id);

  return (
      <Grid>
        <Header pageName={country.name} />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Typography variant="h3">{country.name}</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit dignissimos, optio deleniti neque qui saepe eveniet explicabo omnis distinctio cupiditate soluta nostrum consequuntur expedita accusamus perspiciatis voluptate quo incidunt.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Weather capital={country.capital}/>
              <DateWidget id={id} lang={'en'}/>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Grid>
  );
}
