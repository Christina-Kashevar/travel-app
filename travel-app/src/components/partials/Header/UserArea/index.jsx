import React from 'react';
import { Drawer, Grid, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import SignIn from './SignIn';
import SignUp from './SignUp';

const UserPanel = (props) => {
  const { type, callBack } = props;
  return (type === 'signIn') ? <SignIn callBack={callBack} />: <SignUp callBack={callBack} />;
};

export default function UserArea() {
  const savedType="signIn"; // From cookies;
  const [type, setType] = React.useState(savedType);
  const [state, setState] = React.useState(false);

  const handleSetType = (newType) => (event) => setType(newType);
  const toggleDrawer = (open) => (event) => setState(open);

  return (
    <Grid>
      <IconButton aria-label="login" onClick={toggleDrawer(true)}>
        <AccountCircleIcon />
      </IconButton>
      <Drawer width="30%" anchor="right" open={state} onClose={toggleDrawer(false)}>
        <UserPanel type={type} callBack={handleSetType}/>
      </Drawer>
    </Grid>
  );
}
