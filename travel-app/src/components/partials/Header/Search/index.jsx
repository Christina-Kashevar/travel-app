import React from 'react';
import { COUNTRY_DATA, COUNTRY_IDS  } from '../../../../data/constants';
import useStyles from './styles';

import { useTranslation } from 'react-i18next';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

export default function Search({value, onChange, onSearch }) {
  const classes = useStyles();

  const { t } = useTranslation();

  const searchHandler= (e) => {
    const ids=[];
    COUNTRY_DATA.forEach((country)=> {
      if(country.name.toLowerCase().includes(e.target.value.toLowerCase())
        || country.capital.toLowerCase().includes(e.target.value.toLowerCase())) {
          ids.push(country.id)
      }
    })
    onSearch(ids);
    onChange(e.target.value);
  }

  const enter=(e) => {
    if (e.keyCode === 13) {
      e.target.blur()
    }
  }

  const onDelete =() => {
    onChange('');
    onSearch(COUNTRY_IDS);
  }

  return (
    <div className={classes.search}>
      <IconButton
        aria-label="search"
        color="inherit"
        className={classes.searchIcon}
        onClick={(e)=> e.target.blur()}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        autoFocus
        autoComplete={'off'}
        placeholder={t('PAGE_PLACEHOLDER.SEARCH')}
        value={value}
        onChange={searchHandler}
        onKeyUp={enter}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton aria-label="clear" color="inherit" onClick={onDelete} >
        <ClearIcon />
      </IconButton>
    </div>
  )
}
