import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import useStyles from './styles';

import { Container, Grid, Typography, CardMedia } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Map from '../partials/Map';
import Slider from '../partials/Slider';
import ErrorPage from '../ErrorPage';

import Currency from '../widgets/Currency';
import DateWidget from '../widgets/Date';
import Weather from '../widgets/Weather';

import { getCountryById } from '../../engine';

export default function Country() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const country = getCountryById(id, language);
  const error = Object.keys(country).length === 0;
  const classes = useStyles();

  const [capitalDesc, capitalName] = [t('PAGE_CAPITAL'), country.capital];

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
                <Slider id={id} />
              </Grid>
              <Grid>
                <Map id={id} capital={capitalName} />
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={3}>
            <Weather capital={capitalName} lang={language.slice(0, 2)} />
            <DateWidget id={id} />
            <Currency currencyCode={country.currency} lang={language} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Grid>
    }
    </>
  );
}
