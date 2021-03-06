import React from 'react';
import useStyles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          Footer
        </Toolbar>
      </AppBar>
    </div>
  );
}
