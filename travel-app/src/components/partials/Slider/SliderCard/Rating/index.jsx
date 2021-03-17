import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Box, Button, Typography } from '@material-ui/core/';
import useStyles from './styles';

import { useTranslation } from 'react-i18next';

import RatingTable from './RatingTable';

export default function RatingComponent({ average, value, handleBackdrop, getScores, setValue }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();
  const classes = useStyles();

  const scoreColor = (average > 4) ? classes.green : (average > 3) ? classes.yellow : classes.red;
  return (
    <Box
      component="fieldset"
      borderColor="transparent"
      position="absolute"
      className={classes.rating}
    >
      <Typography className={scoreColor}>{average}</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={setValue}
        className={classes.stars}
      />
      <Button
        color="inherit"
        onClick={handleClickOpen}
        className={classes.button}
      >{t('PAGE_RATING.MARKS')}</Button>
      <RatingTable open={open} handleClose={handleClose} getScores={getScores}/>
    </Box>
  );
}
