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

const [countryCache, sightsCache] = [{}, {}];

function getCountryInfo(data, language) {
  const key = data.code || 'key';
  if (!countryCache[key]) countryCache[key] = data;
  let result = countryCache[key];
  if (language !== 'en-US') {
    const dataPatch = result.translations ? result.translations[language.slice(0, 2)] : {};
    result = { ...result, ...dataPatch };
  }
  return result;
}

function getSightsInfo(key, data, language) {
  if (!sightsCache[key]) sightsCache[key] = data || [];
  let result = sightsCache[key];
  if (language && language !== 'en-US') {
    const lang = language.slice(0, 2);
    result = result.map((sight) => {
      const dataPatch = sight.translations ? sight.translations[lang] : {};
      return { ...sight, ...dataPatch };
    });
  }
  return result;
}

export default function Country() {
  const { code } = useParams();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [country, setCountry] = useState({});
  const [sights, setSights] = useState({});
  const [loading, setLoading] = useState(true);
  const error = (country === null || !code);
  const classes = useStyles();

  const loadInfo = (CountryInfo, sightsInfo) => {
    setCountry(CountryInfo);
    setSights(sightsInfo);
    setLoading(false);
  }

  useEffect(() => {
    if (!countryCache[code]) {
      axios
      .get(`https://travel-app-rs.herokuapp.com/countries/${code}`)
      .then((response) => {
        let result = response.data || {};
        const CountryInfo = getCountryInfo(result, language);
        const sightsInfo = getSightsInfo(code, CountryInfo.sights, language);
        loadInfo(CountryInfo, sightsInfo);
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      const CountryInfo = getCountryInfo({ code }, language);
      const sightsInfo = getSightsInfo(code, CountryInfo.sights, language);
      loadInfo(CountryInfo, sightsInfo);
    }
  }, [code, language]);

  if (error) return <ErrorPage />;
  if (loading) return (
    <Grid>
      <Header />
      <Loading />
    </Grid>
  );

  const [capitalDesc, capitalName] = [t('PAGE_CAPITAL'), country.capital];
    return (
      <Grid>
        <Header />
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
                  <Slider sights={sights} />
                </Grid>
                <Grid>
                  <Map code={code} capital={capitalName} capitalCoords={country.capitalCoordinates}/>
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
