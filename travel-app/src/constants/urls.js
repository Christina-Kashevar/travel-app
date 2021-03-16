const baseUrl = 'https://travel-app-rs.herokuapp.com';

const urls = {
  auth: {
    signup: `${baseUrl}/signup`,
    login: `${baseUrl}/users/login`,
    whoAmI: `${baseUrl}/whoAmI`,
  },
  countries: {
    all: `${baseUrl}/countries`,
    byCode: code => `${baseUrl}/countries/${code}`,
  },
  scores: countryId => `${baseUrl}/scores/${countryId}`
}

export default urls;
