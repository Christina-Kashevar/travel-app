import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { LANGUAGES, DEFAULT_DB_LANG } from '../../../contants/languages';

const getTranslatedCountry = (countryData, language) => {
  const shortLang = LANGUAGES.find(lang => lang.type === language).short;
  return shortLang === DEFAULT_DB_LANG ? countryData : {...countryData, ...countryData.translations[shortLang]};
}

export default function CountryCard({ countryData }) {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const classes = useStyles();
  const [country, setCountry] = useState(getTranslatedCountry(countryData, language));


  useEffect(() => {
    setCountry(getTranslatedCountry(countryData, language))
  }, [language, countryData])

  const [capitalDesc, capitalName] = [t('PAGE_CAPITAL'), country.capital];

  function handleClick() {
    history.push(`/country/${country.code}`);
  }

  return (
    <Box mt={2} mb={2}>
      <Card className={classes.root} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={country.linkToPhoto}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {country.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
            {capitalDesc}: {capitalName}
            </Typography>
            <Typography variant="body2" component="p">
              {country.shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
