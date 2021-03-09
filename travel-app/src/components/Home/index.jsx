import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import CountryCard from '../partials/CountryCard';

import { COUNTRY_IDS } from '../../data/constants';
import { useTranslation } from 'react-i18next';

export default function Country() {
  const [countriesId, setCountriesId] = useState(COUNTRY_IDS);
  const { t } = useTranslation();
  return (
    <Grid>
      <Header
        pageName={t('PAGE_NAME.TRAVEL_APP')}
        onSearch={(ids)=>setCountriesId(ids)}
        homePage={true}
      />
      <Container>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          {countriesId.map((id) => (
            <CountryCard id={id} key={id} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
}
