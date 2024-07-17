import { API } from '../utils/config';
import { AJAX } from '../utils/helper';

/**
 * Fetch data for a specific country based on the URL parameter.
 * @returns {Promise<Object>} - Returns a promise that resolves to the country data.
 */
export const getCountryData = async () => {
  try {
    // Extract country code from URL
    const id = window.location.href.split('?')[1];

    // Fetch country data using the extracted country code
    const data = await AJAX(`${API}alpha/${id}`);

    return data;
  } catch (error) {
    // Propagate the error
    throw error;
  }
};

// Fetch the country data when this module is loaded
getCountryData();
