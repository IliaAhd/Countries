import * as model from '../models/model';
import {
  ShowCountriesView,
  Theme,
  SearchView,
  ContinentsView,
} from '../views/view';

// Instantiate view classes
const showCountriesView = new ShowCountriesView();
const searchView = new SearchView();
const continentsView = new ContinentsView();
const theme = new Theme();

/**
 * Controller function to show all countries
 */
const controllShowAllCountries = async () => {
  try {
    // Show loading skeleton
    showCountriesView.renderSkeletonLoading();
    // Fetch all countries data
    await model.getAllCountries();
    // Render fetched data
    showCountriesView.render(model.state.dataCountries);
  } catch (error) {
    showCountriesView.renderError(error); // Render error message
  }
};

/**
 * Controller function to handle country search
 * @param {string} query - The search query string
 */
const controllSearch = async query => {
  try {
    // Show loading spinner
    showCountriesView.renderLoadingSpinner();
    // Fetch search results
    await model.searchCountries(query);
    // Render search results
    showCountriesView.render(model.state.search);
  } catch (error) {
    // Render error message
    showCountriesView.renderError(
      'Country not found! Please try another country name!'
    );
  }
};

/**
 * Controller function to handle continent filtering
 * @param {string} query - The continent query string
 */
const controllContinents = async query => {
  try {
    // Show loading skeleton
    showCountriesView.renderSkeletonLoading();
    // Fetch countries by continent
    await model.getContinents(query);
    // Render fetched data
    showCountriesView.render(model.state.continents);
  } catch (error) {
    // Render error message
    showCountriesView.renderError(
      'Error fetching data! Please try again later.'
    );
  }
};

/**
 * Initialize the application
 */
const init = () => {
  controllShowAllCountries(); // Show all countries on load
  searchView.addHandlerSearch(controllSearch); // Add search handler
  continentsView.addHandlerContinents(controllContinents); // Add continent filter handler
  theme.addHandlerToggle(); // Add theme toggle handler
};

// Start the application
init();
