import React from 'react';
import useStyles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Button, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  const classes = useStyles();

  const gitHubs = ['volha010892', 'DrD1esel', 'Christina-Kashevar', 'i3-code'];

  return (
    <Grid className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid>
            {gitHubs.map((git) => (
              <Button
                variant="text"
                color="default"
                component="a"
                href={`https://github.com/${git}`}
                target="blank"
                rel="noreferrer noopener"
                // className={classes.button}
                startIcon={<GitHubIcon/>}
                key={git}
              >
                {git}
              </Button>
            ))

            }
          </Grid>
          <Grid>
            <IconButton
              onClick={() => (window.location = 'https://rs.school/js/')}
            >
              <img src="https://rs.school/images/rs_school.svg" alt="RS School logo" className={classes.logoImage}/>
            </IconButton>
            <Typography variant="button" color="initial">2001</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
