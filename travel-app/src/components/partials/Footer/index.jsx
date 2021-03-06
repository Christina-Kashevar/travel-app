import React from 'react';
import useStyles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, IconButton } from '@material-ui/core';
import icon from '../../../assets/gitHubIcon.svg';
import rsSchool from '../../../assets/rs_school_js.svg';

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid>
            <IconButton
              onClick={() =>
                (window.location = 'https://github.com/volha010892')
              }
            >
              <img src={icon} alt="git hub logo" />
            </IconButton>
            <IconButton
              onClick={() => (window.location = 'https://github.com/i3-code')}
            >
              <img src={icon} alt="git hub logo" />
            </IconButton>
            <IconButton
              onClick={() => (window.location = 'https://github.com/DrD1esel')}
            >
              <img src={icon} alt="git hub logo" />
            </IconButton>
            <IconButton
              onClick={() =>
                (window.location = 'https://github.com/Christina-Kashevar')
              }
            >
              <img src={icon} alt="git hub logo" />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton
              onClick={() => (window.location = 'https://rs.school/js/')}
            >
              <img src={rsSchool} alt="rsschool log" />
            </IconButton>
          </Grid>
          <Grid>2021</Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
