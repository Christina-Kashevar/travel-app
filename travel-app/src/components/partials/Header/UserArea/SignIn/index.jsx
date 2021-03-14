import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useTranslation } from 'react-i18next';

import useStyles from './styles';

export default function SignIn(props) {
  const { callBack } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
       {t('SIGNIN.SIGNIN')}
      </Typography>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={t('SIGNUP.USERNAME')}
          autoComplete="username"
          autoFocus
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          label={t('SIGNUP.PASSWORD')}
          type="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={t('SIGNIN.REMEMBER_ME')}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {t('SIGNIN.SUBMIT')}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              {t('SIGNIN.FORGOT_PASSWORD')}

            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick={callBack('signUp')}>
              {t('SIGNIN.NO_ACCOUNT')}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  );
}
