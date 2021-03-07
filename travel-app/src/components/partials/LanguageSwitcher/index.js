import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { Translate } from '@material-ui/icons';

import { LANGUAGES } from '../../../contants/languages';
import useStyles from './styles';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const classes = useStyles();
  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const renderLangOptions = () =>
    LANGUAGES.map((lang) => (
      <MenuItem key={lang.type} value={lang.type}>
        {lang.label}
      </MenuItem>
    ));
  return (
    <FormControl className={classes.root} variant="outlined">
      <Select
        classes={{ root: classes.select }}
        value={i18n.language || ''}
        onChange={handleLangChange}
        startAdornment={<Translate />}
      >
        {renderLangOptions()}
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
