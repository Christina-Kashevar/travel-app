import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import CountryCard from '../partials/CountryCard';

import { COUNTRY_CODES } from '../../data/constants';
import { useTranslation } from 'react-i18next';

export default function Country() {
  const [countryCodes, setCountryCodes] = useState(COUNTRY_CODES);
  const [recorder, toggleRecorder] = useState(false);
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
        onSearch={setCountryCodes}
        homePage={true}
        recorder={recorder}
        toggleRecorder={toggleRecorder}
      />
      <Grid className={classes.root}>
        <Container>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            {countryCodes.map((code) => (
              <CountryCard code={code} key={code} toggleRecorder={toggleRecorder}/>
            ))}
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </Grid>
  );
}

