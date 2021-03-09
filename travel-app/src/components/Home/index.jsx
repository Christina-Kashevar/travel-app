import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import CountryCard from '../partials/CountryCard';

import { COUNTRY_IDS } from '../../data/constants';
import { useTranslation } from 'react-i18next';

export default function Country() {
  const { t } = useTranslation();
  return (
    <Grid>
      <Header pageName={t('PAGE_NAME.TRAVEL_APP')} />
      <Container>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          {COUNTRY_IDS.map((id) => (
            <CountryCard id={id} key={id} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
}
