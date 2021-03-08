import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import useStyles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header(props) {
  const { pageName, homePage, onSearch } = props;
  const [value, setValue] = useState('');
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
          { homePage &&
            <Search
              value={value}
              onDelete={()=> setValue('')}
              onChange={(val)=> setValue(val)}
              onSearch={onSearch}
            /> }
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
    </div>
  );
}
