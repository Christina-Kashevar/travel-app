import React, { useState } from 'react';
import useStyles from './styles';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default function LoginWindow() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const userName = (e) => {
    setName(e.target.value);
  };
  const userPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <IconButton color="inherit" aria-label="open login" onClick={handleOpen}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Grid className={classes.paper}>
          <Grid className={classes.close}>
          <Typography variant="h4" className={classes.singIn}>SIGN IN</Typography>
            <IconButton color="inherit" aria-label="close" onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="Name"
                      size="small"
                      variant="outlined"
                      onChange={userName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                      onChange={userPassword}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button color="primary" fullWidth type="submit" variant="contained" onClick={handleSubmit}>
                  Log in
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Modal>
    </div>
  );
}
