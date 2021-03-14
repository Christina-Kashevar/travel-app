import React from 'react';
import { Drawer, Grid, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import SignIn from './SignIn';
import SignUp from './SignUp';

export default function UserArea(props) {
  const { type } = props;
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => setState(open);

  const UserPanel = (type) => (
    <SignUp />
  );

  return (
    <Grid key={type}>
      <IconButton aria-label="login" onClick={toggleDrawer(true)}>
        <AccountCircleIcon />
      </IconButton>
      <Drawer width="30%" anchor="right" open={state} onClose={toggleDrawer(false)}>
        <UserPanel />
      </Drawer>
    </Grid>
  );
}
