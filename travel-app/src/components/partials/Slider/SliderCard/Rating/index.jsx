import React from 'react';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

import { useTranslation } from 'react-i18next';

import { Box, Button } from '@material-ui/core/';

export default function RatingComponent({ value, handleValueChange, handleBackdrop }) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box
      component="fieldset"
      borderColor="transparent"
      position="absolute"
      className={classes.rating}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handleValueChange}
        className={classes.stars}
      />
      <Button
        color='inherit'
        onClick={() => handleBackdrop(true)}
        className={classes.button}
      >{t('PAGE_RATING.MARKS')}</Button>
    </Box>
  );
}

