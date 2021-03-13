import { COUNTRY_DATA } from '../data/constants';

export function getCountryById(countryId, langId) {
  const result = COUNTRY_DATA.filter((item) => item.id === countryId)[0] || {};
  if (langId && langId !== 'en-US') {
    const lang = langId.slice(0, 2);
    const dataPatch = (result.translations) ? result.translations[lang] || {};

    return { ...result, ...dataPatch };
  }
  return result;
}
