import React from 'react';
import { COUNTRY_DATA, COUNTRY_IDS  } from '../../../../data/constants';
import languagesCodes from '../../../../data/languagesCodes';
import useStyles from './styles';

import { useTranslation } from 'react-i18next';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

export default function Search({value, onChange, onSearch}) {
  const classes = useStyles();

  const { t, i18n } = useTranslation();

  const searchHandler= (e) => {
    let newVal = value;
    const upperCase = e.key.toUpperCase() === e.key;

    if ((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 64 && e.keyCode < 91)
    || e.keyCode === 186 || e.keyCode === 188 || e.keyCode === 190 || e.keyCode === 192
    || e.keyCode === 219 || e.keyCode === 221 || e.keyCode === 222) {
      const targetLetter = languagesCodes[i18n.language].filter(letter => letter.code === e.keyCode)[0];
      newVal = value + targetLetter[upperCase ? 'shift' : 'small'];
    }
    if (e.keyCode === 8) {
      newVal = value.slice(0, -1);
    }
    if (e.keyCode === 13) {
      e.target.blur()
    }

    const ids=[];
    COUNTRY_DATA.forEach((country)=> {
      if(country.name.toLowerCase().includes(newVal.toLowerCase())
      || country.capital.toLowerCase().includes(newVal.toLowerCase())) {
        ids.push(country.id)
      }
    })

    onChange(newVal);
    onSearch(ids);
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
        onKeyUp={searchHandler}
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
