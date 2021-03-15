import React, { useContext, useState, useEffect } from 'react';
import { Button, Drawer, Grid, IconButton, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { UserContext } from '../../../../contexts/UserContext';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import { AuthService } from '../../../../services/auth.service';

const UserPanel = ({ type, ...props }) => {
  return type === 'signIn' ? <SignIn {...props} /> : <SignUp {...props} />;
};

export default function UserArea() {
  const savedType = 'signIn'; // From cookies;
  const {t} = useTranslation();
  const classes = useStyles();
  const [type, setType] = useState(savedType);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const [user, setUser] = useContext(UserContext);
  const handleSetType = (newType) => (event) => setType(newType);
  const toggleDrawer = (open) => (event) => setIsDrawerOpened(open);

  
  useEffect(() => {
    const checkAuthorization = async () => {
      const userData = await AuthService.checkAuthorization();
      if (userData && !(userData instanceof Error)) {
        setUser(userData.data);
      }
    };
    checkAuthorization();
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
  }

  return (
    <Grid>
      <IconButton onClick={toggleDrawer(true)}>
        {user ? <img className={classes.avatarIcon} src={user.avatar} width={40} height={40} alt="avatar" /> : <AccountCircleIcon />}
      </IconButton>
      <Drawer width="30%" anchor="right" open={isDrawerOpened} onClose={toggleDrawer(false)}>
        {user ? (
          <Grid container direction="column" alignItems="center" className={classes.profile}>
            <img className={classes.avatar} src={user.avatar} alt="avatar" />
            <Typography className={classes.username}>{user.username}</Typography>
            <Button onClick={handleLogout} fullWidth variant="contained" color="primary">{t('USER_PANEL.LOGOUT')}</Button>
          </Grid>
        ) : (
          <UserPanel type={type} callBack={handleSetType} onSignIn={setUser} onClose={toggleDrawer(false)} />
        )}
      </Drawer>
    </Grid>
  );
}
