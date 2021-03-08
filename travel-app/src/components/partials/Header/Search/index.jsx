import React from 'react';
import { COUNTRY_DATA } from '../../../../data/constants';
import useStyles from './styles';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

export default function Search({value, onChange, onDelete, onSearch}) {
  const classes = useStyles();

  const searchHandler= (e) => {
    const ids=[];
    onChange(e.target.value);
    COUNTRY_DATA.forEach((country)=> {
      if(country.name.toLowerCase().includes(e.target.value.toLowerCase())
        || country.capital.toLowerCase().includes(e.target.value.toLowerCase())) {
          ids.push(country.id)
      }
    })
    onSearch(ids);
  }

  return (
    <div className={classes.search}>
      <IconButton aria-label="search" color="inherit" className={classes.searchIcon}>
        <SearchIcon />
      </IconButton>
      <InputBase
        autoFocus
        autoComplete={'off'}
        placeholder={'SEARCH...'}
        value={value}
        onChange={searchHandler}
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
