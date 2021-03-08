import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import PublicIcon from '@material-ui/icons/Public';
import SearchIcon from '@material-ui/icons/Search';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header(props) {
  const { pageName } = props;
  const needToShowSearch = (pageName === 'Travel App');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link to="/">
              <PublicIcon />
            </Link>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            { pageName }
          </Typography>
          {
            needToShowSearch &&
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          }
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
    </div>
  );
}
