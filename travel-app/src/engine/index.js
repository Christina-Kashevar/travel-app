import { COUNTRY_DATA, SIGHTS_DATA } from '../data/constants';

export function getCountryById(countryId, langId) {
  const result = COUNTRY_DATA.filter((item) => item.id === countryId)[0] || {};
  if (langId && langId !== 'en-US') {
    const lang = langId.slice(0, 2);
    const dataPatch = result.translations ? result.translations[lang] : {};
    return { ...result, ...dataPatch };
  }
  return result;
}

export function getSightsById(countryId, langId) {
  const country = SIGHTS_DATA.filter((item) => item.id === countryId)[0] || {};
  const result = country.sights || [];
  if (langId && langId !== 'en-US') {
    const lang = langId.slice(0, 2);
    return result.map((sight) => {
      const dataPatch = sight.translations ? sight.translations[lang] : {};
      return { ...sight, ...dataPatch };
    });
  }
  return result;
}
