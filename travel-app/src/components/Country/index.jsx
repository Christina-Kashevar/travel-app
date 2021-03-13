import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import useStyles from './styles';

import { Container, Grid, Typography, CardMedia } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Map from '../partials/Map';
import Slider from '../partials/Slider';

import Currency from '../widgets/Currency';
import DateWidget from '../widgets/Date';
import Weather from '../widgets/Weather';

import { getCountryById } from '../../engine';

export default function Country() {
  const { id } = useParams();
  const country = getCountryById(id);
  const error = Object.keys(country).length === 0
  const classes = useStyles();
  const [capitalDesc, capitalName] = ['', ''];

    return (
    <>
    { error ? <ErrorPage/>
      : <Grid>
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
                <Typography className={classes.capital}>
                  {capitalDesc}: {capitalName}
                </Typography>
              </Grid>
              {country.description.map((el, i) => {
                return (
                  <Typography variant="body1" className={classes.text} key={i}>
                    {el}
                  </Typography>
                );
              })}
              <Grid container className={classes.player}>
                <Player src={country.linkToVideo}>
                  <BigPlayButton position="center" />
                </Player>
              </Grid>
              <Grid>
                <Slider />
              </Grid>
              <Grid>
                <Map id={id} capital={capitalName} />
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={3}>
            <Weather capital={capitalName} lang={'en'} />
            <DateWidget id={id} lang={'en'} />
            <Currency currencyCode={country.currency} lang={'en'} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Grid>
    }
    </>
  );
}
