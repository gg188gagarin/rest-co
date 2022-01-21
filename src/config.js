const BASE_URL = 'https://restcountries.com/v2/';
const BASE_OF_CODES = 'https://restcountries.com/v2/alpha?codes={code},{code},{code}';


export const ALL_COUNTRIES = BASE_URL + 'all';

export const searchByCountry = (name) => BASE_URL + 'name/' + name;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(`,`);

