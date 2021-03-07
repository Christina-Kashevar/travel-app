import { COUNTRY_DATA } from '../data/constants';

export function getCountryById(id) {
  return COUNTRY_DATA.filter((item) => item.id === id)[0] || {};
}
