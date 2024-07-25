import { Theme } from '../views/view';
import * as model from '../models/countryModel';
import { CountryView, BrowseBack } from '../views/countryView';

// Initialize instances of Theme, CountryView, and BrowseBack
const theme = new Theme();
const countryView = new CountryView();
const browseBack = new BrowseBack();

/**
 * Controller function to handle fetching and rendering country data.
 */
const controllCountry = async () => {
  try {
    // Render a loading spinner while fetching data
    countryView.renderLoadingSpinner();

    // Fetch country data
    const data = await model.getCountryData();

    // Render the fetched country data
    countryView.render(data);
  } catch (error) {
    // Render error message
    countryView.renderError(error);
  }
};

/**
 * Initialize the application.
 * Set up event handlers and fetch initial data.
 */
const init = () => {
  // Fetch and render country data on page load
  controllCountry();

  // Set up event handler for theme toggle
  theme.addHandlerToggle();

  // Set up event handler for "back" button
  browseBack.addHandlerGetBack();
};

// Run the init function to start the application
init();
