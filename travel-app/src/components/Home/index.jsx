/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';

import useStyles from './styles';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import CountryCard from '../partials/CountryCard';

import { useTranslation } from 'react-i18next';
import urls from '../../constants/urls';
import Loading from '../partials/Loading';
import { LANGUAGES, DEFAULT_DB_LANG } from '../../constants/languages';

const getTranslatedCountry = (countryData, language) => {
  const shortLang = LANGUAGES.find((lang) => lang.type === language).short;
  return shortLang === DEFAULT_DB_LANG ? countryData : { ...countryData, ...countryData.translations[shortLang] };
};

export default function Country() {
  const [isPending, setIsPending] = useState(true);
  const [countries, setCountries] = useState([]);
  const [translatedCountries, setTranslatedCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const classes = useStyles();

  useEffect(() => {
    const getCountryData = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(urls.countries.all);
        setCountries(response.data);
        const newTranslatedCountries = response.data.map((country) => getTranslatedCountry(country, language));
        setTranslatedCountries(newTranslatedCountries);
        filterCountries(newTranslatedCountries);
      } catch (err) {
        console.log(err);
      } finally {
        setIsPending(false);
      }
    };
    getCountryData();
  }, []);

  useEffect(() => {
    const newTranslatedCountries = countries.map((country) => getTranslatedCountry(country, language));
    setTranslatedCountries(newTranslatedCountries);
    filterCountries(newTranslatedCountries);
  }, [language, countries]);

  useEffect(() => {
    filterCountries(translatedCountries);
  }, [searchValue]);

  const filterCountries = (countryList) =>
    setFilteredCountries(
      countryList.filter(
        (country) =>
          country.name.toLowerCase().includes(searchValue) || country.capital.toLowerCase().includes(searchValue),
      ),
    );

  return (
    <Grid container direction="column" justify="space-between" alignItems="stretch">
      <Header pageName={t('PAGE_NAME.TRAVEL_APP')} onSearch={setSearchValue} homePage={true} />
      <Grid className={classes.root}>
        {isPending && <Loading />}
        <Container>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            {filteredCountries.map((country) => (
              <CountryCard countryData={country} key={country.id} />
            ))}
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </Grid>
  );
}
