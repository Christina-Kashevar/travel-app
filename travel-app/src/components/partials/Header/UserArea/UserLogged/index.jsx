import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

export default function SignIn({ user, handleLogout}) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" className={classes.profile}>
      <img className={classes.avatar} src={user.avatar} alt="avatar" />
      <Typography className={classes.username}>{user.username}</Typography>
      <Button onClick={handleLogout} fullWidth variant="contained" color="primary">{t('USER_PANEL.LOGOUT')}</Button>
    </Grid>
  );
}
