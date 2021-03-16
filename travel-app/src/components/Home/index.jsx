import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';

import useStyles from './styles';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import CountryCard from '../partials/CountryCard';

import { COUNTRY_CODES } from '../../data/constants';
import { useTranslation } from 'react-i18next';
import urls from '../../contants/urls';
import Loading from '../partials/Loading';

export default function Country() {
  const [countryCodes, setCountryCodes] = useState(COUNTRY_CODES);
  const [isPending, setIsPending] = useState(true);
  const [countries, setCountries] = useState([]);
  const { t } = useTranslation();
  const classes = useStyles();

  useEffect(() => {
    const getCountryData = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(urls.countries.all);
        setCountries(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsPending(false);
      }
    };
    getCountryData();
  }, []);  

  return (
    <Grid container direction="column" justify="space-between" alignItems="stretch">
      <Header pageName={t('PAGE_NAME.TRAVEL_APP')} onSearch={setCountryCodes} homePage={true} />
      <Grid className={classes.root}>
        {isPending && <Loading />}
        <Container>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            {countries.map((country) => (
              <CountryCard countryData={country} key={country.id} />
            ))}
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </Grid>
  );
}
