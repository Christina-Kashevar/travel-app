import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { getCountryByCode } from '../../../engine';

export default function CountryCard(props) {
  const history = useHistory();
  const { code, toggleRecorder } = props;
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const country = getCountryByCode(code, language);
  const classes = useStyles();

  const [capitalDesc, capitalName] = [t('PAGE_CAPITAL'), country.capital];

  function handleClick() {
    history.push(`/country/${country.code}`);
    toggleRecorder(false)
  }

  return (
    <Box mt={2} mb={2}>
      <Card className={classes.root} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={country.img}
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
