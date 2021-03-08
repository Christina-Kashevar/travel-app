import React from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './styles';

import { Container, Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Map from '../partials/Map';


import Currency from '../widgets/Currency';
import DateWidget from '../widgets/Date';
import Weather from '../widgets/Weather';

import { getCountryById } from '../../engine';

export default function Country() {
  const { id } = useParams();
  const country = getCountryById(id);
  const classes = useStyles();

  return (
      <Grid>
        <Header pageName={country.name} />
        <Container>
          <Grid container spacing={1} className={classes.root}>
            <Grid item xs={9}>
              <Container>
                <Typography variant="h3">{country.name}</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit dignissimos, optio deleniti neque qui saepe eveniet explicabo omnis distinctio cupiditate soluta nostrum consequuntur expedita accusamus perspiciatis voluptate quo incidunt.
                </Typography>
                <Map id={id} />
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit dignissimos, optio deleniti neque qui saepe eveniet explicabo omnis distinctio cupiditate soluta nostrum consequuntur expedita accusamus perspiciatis voluptate quo incidunt.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Weather capital={country.capital}/>
              <DateWidget id={id} lang={'en'}/>
              <Currency currencyCod={country.currency}/>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Grid>
  );
}
