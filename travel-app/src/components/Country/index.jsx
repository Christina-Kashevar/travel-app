import React, { useState, useEffect} from 'react';
import axios from 'axios';
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
import Loading from '../partials/Loading';

import Currency from '../widgets/Currency';
import DateWidget from '../widgets/Date';
import Weather from '../widgets/Weather';

export default function Country() {
  const { code } = useParams();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const error = (country === null);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `https://travel-app-rs.herokuapp.com/countries/${code}`
      )
      .then((response) => {
        setCountry(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [code, language]);

  if (error) return <ErrorPage />;
  if (loading) return <Loading />;

  const [capitalDesc, capitalName] = [t('PAGE_CAPITAL'), country.capital];
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
                  <CardMedia className={classes.media} image={country.linkToPhoto} title="Contemplative Reptile" />
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
                  <Slider code={code} />
                </Grid>
                <Grid>
                  <Map code={code} capital={capitalName} />
                </Grid>
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Weather capital={capitalName} lang={language.slice(0, 2)} />
              <DateWidget timeZone={country.timeZone} />
              <Currency currencyCode={country.currency} lang={language} />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Grid>
  );
}
