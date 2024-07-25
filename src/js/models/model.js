import { API } from '../utils/config';
import { AJAX } from '../utils/helper';

// State object to hold various data arrays
export const state = {
  dataCountries: [],
  search: [],
  continents: [],
};

/**
 * Helper function to create a formatted data object from raw API data
 * @param {Array} data - Raw data array from the API
 * @returns {Array} - Formatted data array
 */
const createDataObj = data => {
  return data.map(d => ({
    name: d.name.common,
    capital: d.capital,
    population: d.population,
    region: d.region,
    flag: d.flags.png,
    code: d.cca3,
    page: 1,
    ...(d.flags.alt && { flagAlt: d.flags.alt }), // Conditionally add flagAlt if it exists
  }));
};

/**
 * Function to get all countries data
 * @returns {Promise<Array>} - A promise that resolves to the data of all countries
 */
export const getAllCountries = async () => {
  try {
    const data = await AJAX(`${API}all`);
    state.dataCountries = createDataObj(data);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to search for countries by name
 * @param {string} query - The search query string
 * @returns {Promise<void>}
 */
export const searchCountries = async query => {
  try {
    let data;
    if (query === '') {
      data = await getAllCountries();
    } else {
      data = await AJAX(`${API}name/${query}`);
    }
    state.search = createDataObj(data);
  } catch (error) {
    throw error;
  }
};

/**
 * Function to get countries by continent
 * @param {string} query - The continent query string
 * @returns {Promise<void>}
 */
export const getContinents = async query => {
  try {
    let data;
    if (query === 'all') {
      data = await getAllCountries();
    } else {
      data = await AJAX(`${API}region/${query}`);
    }
    state.continents = createDataObj(data);
  } catch (error) {
    throw error;
  }
};
