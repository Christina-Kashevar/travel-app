import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'
import useStyles from './styles';

import { Container, Grid, Typography, CardMedia } from '@material-ui/core';

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
              <Typography variant="h3" className={classes.name}>
                {country.name}
              </Typography>
              <Grid container direction="column" className={classes.flex}>
                <CardMedia className={classes.media} image={country.img} title="Contemplative Reptile" />
                <Typography className={classes.capital}>Capital: {country.capital}</Typography>
              </Grid>
              <Typography variant="body1" className={classes.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit dignissimos, optio deleniti
                neque qui saepe eveniet explicabo omnis distinctio cupiditate soluta nostrum consequuntur expedita
                accusamus perspiciatis voluptate quo incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus suscipit dignissimos, optio deleniti neque qui saepe eveniet explicabo omnis distinctio
                cupiditate soluta nostrum consequuntur expedita accusamus perspiciatis voluptate quo incidunt. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit dignissimos, optio deleniti neque
                qui saepe eveniet explicabo omnis distinctio cupiditate soluta nostrum consequuntur expedita accusamus
                perspiciatis voluptate quo incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                suscipit dignissimos, optio deleniti neque qui saepe eveniet explicabo omnis distinctio cupiditate
                soluta nostrum consequuntur expedita accusamus perspiciatis voluptate quo incidunt.
                erspiciatis voluptate quo incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                suscipit dignissimos, optio deleniti neque qui saepe eveniet explicabo omnis distinctio cupiditate
                soluta nostrum
              </Typography>
              <Typography variant="body1" className={classes.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit dignissimos, optio deleniti
                neque qui saepe eveniet explicabo omnis distinctio cupiditate soluta nostrum consequuntur expedita
                accusamus perspiciatis voluptate quo incidunt.
              </Typography>
              <Grid container className={classes.player}>
                <ReactPlayer
                  url={country.linkToVideo}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid>
                <Map id={id} capital={country.capital} />
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={3}>
            <Weather capital={country.capital} lang={'en'} />
            <DateWidget id={id} lang={'en'} />
            <Currency currencyCode={country.currency} lang={'en'} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
}
