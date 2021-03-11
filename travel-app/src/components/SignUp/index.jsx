import React, { useRef, useState } from 'react';
import { Button, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../partials/LanguageSwitcher';
import Loading from '../partials/Loading';
import { AuthService } from '../../services/auth.service';

const MAX_AVATAR_SIZE = 2 * 1024 * 1024;

export default function SignUp() {
  const { t } = useTranslation();
  const classes = useStyles();

  const formRef = useRef();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState('');
  const [signError, setSignError] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleUsernameChange = (e) => {
    setSignError('');
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlesDeleteAvatar = (e) => setAvatar(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file.size > MAX_AVATAR_SIZE) {
      setAvatarError('SIGNUP.AVATAR_SIZE_ERROR');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setAvatar(reader.result);
      setAvatarError(null);
    };
  };

  const handleSubmit = async () => {
    if (formRef.current.reportValidity()) {
      setIsPending(true);
      const response = await AuthService.signUp({ username, password, avatar });
      if (response instanceof Error) {
        setIsPending(false);
        if (response.response.status === 409) {
          setSignError('SIGNUP.USER_EXISTS');
        } else {
          setSignError('SIGNUP.SOMETHIG_WENT_WRONG');
        }
      } else {
        history.push('/');
      }
    }
  };

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      {isPending && <Loading />}
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
            inputProps={{ minLength: 8 }}
            onChange={handlePasswordChange}
          />
          <Grid className={classes.avatarWrapper}>
            {!avatar ? (
              <label className={classes.avatarInputLabel}>
                <PhotoIcon fontSize="large" color="primary" />
                <Typography>{t('SIGNUP.ADD_PHOTO')}</Typography>
                <TextField
                  required
                  className={classes.avatarInput}
                  type="file"
                  inputProps={{ accept: '.jpg, .jpeg, .png' }}
                  onChange={handleAvatarChange}
                />
              </label>
            ) : (
              <>
                <img src={avatar} className={classes.avatarImg} alt="" />
                <IconButton className={classes.deleteAvatar} onClick={handlesDeleteAvatar}>
                  <DeleteIcon />
                </IconButton>
              </>
            )}
            {avatarError && <Typography className={classes.avatarError}>{t(avatarError)}</Typography>}
          </Grid>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {t('SIGNUP.SUBMIT')}
          </Button>
          {signError && <Typography className={classes.signError}>{t(signError)}</Typography>}
        </Grid>
      </form>
    </Grid>
  );
}
