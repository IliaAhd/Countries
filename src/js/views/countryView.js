import { View } from '../views/view';

/**
 * Class representing the view for displaying a single country's details.
 * Extends the base View class.
 */
export class CountryView extends View {
  _parentEl = document.querySelector('#country');

  /**
   * Generates HTML markup for displaying country details.
   * @param {Object} data - The country data.
   * @returns {string} - The generated HTML markup.
   */
  _generateMarkup(data) {
    return `
      <div class="container px-4 md:px-0 md:flex md:justify-between md:items-center">
        <img class="mx-auto container md:w-1/2 md:pr-10" src="${
          data.flags.svg
        }" alt="Country Flag" />
        <div class="md:w-1/2 md:pl-8">
          <div class="md:flex md:justify-between md:items-center md:space-x-8 space-y-12">
            <div class="space-y-3">
              <h2 class="font-bold text-2xl md:text-3xl pt-9 pb-6 md:pt-0">${
                data.name.common
              }</h2>
              <p><span class="font-bold">Native Name:</span> <span class="font-light">${
                data.name.nativeName
                  ? Object.entries(data.name.nativeName)[0][1].official
                  : 'Not found!'
              }</span></p>
              <p><span class="font-bold">Population:</span> <span class="font-light">${new Intl.NumberFormat().format(
                data.population
              )}</span></p>
              <p><span class="font-bold">Region:</span> <span class="font-light">${
                data.region
              }</span></p>
              <p><span class="font-bold">Sub Region:</span> <span class="font-light">${
                data.subregion
              }</span></p>
            </div>
            <div class="space-y-3">
              <p><span class="font-bold">Top Level Domain:</span> <span class="font-light">${
                data.tld[0]
              }</span></p>
              <p><span class="font-bold">Currency:</span> <span class="font-light">${
                data.currencies
                  ? Object.entries(data.currencies)[0][1].name
                  : 'Not found!'
              } (${
      data.currencies
        ? Object.entries(data.currencies)[0][1].symbol
        : 'Not found!'
    })</span></p>
              <p><span class="font-bold">Languages:</span> <span class="font-light">${
                data.languages
                  ? Object.entries(data.languages)[0][1]
                  : 'Not found!'
              }</span></p>
            </div>
          </div>
          <div class="md:space-y-0 py-6 flex items-center flex-wrap gap-5">
            <h3 class="text-lg font-bold ${
              data.borders ? '' : 'line-through'
            }">Border Countries:</h3>
            <div class="flex gap-4 flex-wrap justify-center items-center">
              ${
                data.borders
                  ? data.borders
                      .map((d, i) => {
                        if (i < 3) return this._generateBordersMarkup(d);
                      })
                      .join('')
                  : 'No border countries!'
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Generates HTML markup for displaying a border country.
   * @param {string} data - The border country code.
   * @returns {string} - The generated HTML markup.
   */
  _generateBordersMarkup(data) {
    return `
      <a href="/country?${data}" class="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white dark:bg-dark-mode-elements text-center py-2 w-20 md:w-28 text-sm">
        ${data}
      </a>
    `;
  }
}

/**
 * Class representing the functionality for the back button.
 */
export class BrowseBack {
  _parentEl = document.querySelector('#back');

  /**
   * Adds event handler to the back button to navigate to the previous page.
   */
  addHandlerGetBack() {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target;
      if (!btn) return;
      window.history.back();
    });
  }
}
