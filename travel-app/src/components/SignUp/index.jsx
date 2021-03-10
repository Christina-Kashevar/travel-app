import React, { useRef, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import useStyles from './styles';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../partials/LanguageSwitcher';
import { AuthService } from '../../services/auth.service';

export default function SignUp() {
  const { t } = useTranslation();
  const classes = useStyles();

  const formRef = useRef();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    if(formRef.current.reportValidity()) {
      const userData = await AuthService.signUp(username, password);
      if(userData) {
        history.push('/');
      }
    }
  }

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid className={classes.languageSwitcher}>
        <LanguageSwitcher />
      </Grid>
      <form ref={formRef}>
        <Grid container direction="column" className={classes.formContainer}>
          <TextField
            required
            label={t('SIGNUP.USERNAME')}
            className={classes.textField}
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            required
            label={t('SIGNUP.PASSWORD')}
            className={classes.textField}
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary">{t('SIGNUP.SUBMIT')}</Button>
        </Grid>
      </form>
    </Grid>
  );
}
