import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import UserArea from './UserArea';
import useStyles from './styles';

import { useTranslation } from 'react-i18next';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Logo } from "../../../assets/icons/travel.svg";

import LanguageSwitcher from '../LanguageSwitcher';

export default function Header(props) {
  const { pageName, homePage, onSearch } = props;
  const [value, setValue] = useState('');
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="start page">
            <Link to="/">
            <SvgIcon fontSize="large">
              <Logo />
            </SvgIcon>
            </Link>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {pageName}
          </Typography>
          {homePage && <Search value={value} onChange={setValue} onSearch={onSearch} />}
          <LanguageSwitcher />
          <UserArea />
        </Toolbar>
      </AppBar>
    </div>
  );
}
