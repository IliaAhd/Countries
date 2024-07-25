Here is a `README.md` file for your project:

```markdown
# Country Info App

## Overview

The Country Info App is a web application that allows users to search for and view detailed information about countries around the world. It provides information such as the country's name, population, region, sub-region, native name, top-level domain, currency, languages, and border countries. The app also includes a dark mode feature for a better user experience.

## Features

- **Search for Countries**: Users can search for a country by its name.
- **View Country Details**: Detailed information about a selected country is displayed.
- **View Countries by Continent**: Users can filter countries by continent.
- **Dark Mode**: Toggle between light and dark themes.
- **Back Navigation**: Easy navigation to the previous page.

## Technologies Used

- **HTML/CSS**: For structuring and styling the application.
- **JavaScript**: For the application logic.
- **Flowbite**: For UI components.
- **REST Countries API**: To fetch country data.

## Project Structure

```plaintext
.
├── index.html
├── css
│   ├── styles.css
├── js
│   ├── controller.js
│   ├── model.js
│   ├── view.js
├── utils
│   ├── config.js
│   ├── helper.js
├── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IliaAhd/Countries.git
   ```

2. Navigate to the project directory:
   ```bash
   cd country-info-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Open `index.html` in your web browser:
   ```bash
   npm run dev
   ```

## Usage

- **Search for a Country**: Use the search bar to enter a country name and view the details.
- **View by Continent**: Click on the continent buttons to filter countries by continent.
- **Toggle Dark Mode**: Use the toggle button to switch between light and dark themes.
- **Back Navigation**: Use the back button to navigate to the previous page.

## Code Explanation

### Controller

The `controller.js` file initializes the application, sets up event handlers, and controls the flow of data between the model and view.

### Model

The `model.js` file handles data fetching from the REST Countries API.

### View

The `view.js` file contains the base View class for rendering elements on the page.

The `viewCountry.js` file contains the CountryView and BrowseBack classes for displaying country details and handling back navigation.

### Theme

The `Theme` class in `view.js` handles the toggling of light and dark themes.

## Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue.


## Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing country data.
- [Flowbite](https://flowbite.com/) for UI components.
