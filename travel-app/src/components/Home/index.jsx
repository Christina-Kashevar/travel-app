import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import CountryCard from '../partials/CountryCard';

import { COUNTRY_IDS } from '../../data/constants';
import { useTranslation } from 'react-i18next';

export default function Country() {
  const [countriesId, setCountriesId] = useState(COUNTRY_IDS);
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="stretch"
    >
      <Header
        pageName={t('PAGE_NAME.TRAVEL_APP')}
        onSearch={setCountriesId}
        homePage={true}
      />
      <Grid className={classes.root}>
        <Container>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            {countriesId.map((id) => (
              <CountryCard id={id} key={id} />
            ))}
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </Grid>
  );
}

