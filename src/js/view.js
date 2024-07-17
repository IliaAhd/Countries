import 'flowbite';

// Base view class
export class View {
  _data;
  _message;

  /**
   * Render the data
   * @param {Array} data - Data to render
   */
  render(data) {
    this._data = data;
    this._clear();
    this._data.map(d =>
      this._parentEl.insertAdjacentHTML('beforeend', this._generateMarkup(d))
    );
  }

  /**
   * Render an error message
   * @param {string} message - Error message to render
   */
  renderError(message = this._message) {
    this._clear();
    this._parentEl.innerHTML = message;
  }

  /**
   * Render a loading spinner
   */
  renderLoadingSpinner() {
    const markup = `
      <div class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-gray-900 to-slate-400 animate-spin absolute">
          <div class="h-9 w-9 rounded-full bg-light-mode-background dark:bg-dark-mode-background"></div>
        </div>
      </div> `;

    this._clear();
    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }

  /**
   * Clear the parent element's content
   */
  _clear() {
    this._parentEl.innerHTML = '';
  }
}

// ShowCountriesView class extending the base View class
export class ShowCountriesView extends View {
  _parentEl = document.querySelector('#countriesContainer');

  /**
   * Generate markup for a single country
   * @param {Object} data - Country data
   * @returns {string} - Markup for the country
   */
  _generateMarkup(data) {
    return `
      <li class="rounded-lg overflow-hidden shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px]  dark:bg-dark-mode-elements sm:h-[420px]">
        <a href="/country?${data.code}" class="card">
          <img class="sm:h-[180px] w-full" src="${data.flag}" alt="${
      data.flagAlt
    }" />
          <div class="px-6 py-8 sm:py-0 space-y-1">
            <h2 class="font-extrabold text-xl my-8">${data.name}</h2>
            <p>
              <span class="font-bold">Population:</span>
              <span class="text-sm font-light">${new Intl.NumberFormat().format(
                data.population
              )}</span>
            </p>
            <p>
              <span class="font-bold">Region:</span>
              <span class="text-sm font-light">${data.region}</span>
            </p>
            <p>
              <span class="font-bold">Capital:</span>
              <span class="text-sm font-light">${data.capital}</span>
            </p>
          </div>
        </a>
      </li>
    `;
  }

  /**
   * Render skeleton loading screen
   */
  renderSkeletonLoading() {
    const markup = `
      <div class="relative bg-white p-4 rounded-lg overflow-hidden shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px] h-[400px] opacity-45 dark:bg-dark-mode-elements">
        <div class="m-2 animate-pulse">
          <div class="flex items-center justify-center h-48 bg-gray-300 dark:bg-gray-700"></div>
          <div class="h-8 w-48 mb-4 mt-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-2 max-w-[360px] mb-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-6 rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-6 max-w-[330px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-4 max-w-[50px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    `;

    this._clear();
    for (let i = 0; i < 8; i++) {
      this._parentEl.insertAdjacentHTML('beforeend', markup);
    }
  }
}

// Theme class for handling theme toggling
export class Theme {
  _parentEl = document.querySelector('#btnToggler');
  _html = document.documentElement;
  _iconDark = this._parentEl.querySelector('#iconDark');
  _iconLight = this._parentEl.querySelector('#iconLight');
  _mode = this._parentEl.querySelector('#mode');

  constructor() {
    this._toggleTheme();
  }

  /**
   * Add event handler for theme toggle button
   */
  addHandlerToggle() {
    this._parentEl.addEventListener('click', () => {
      this._html.classList.contains('dark')
        ? this._setTheme(false)
        : this._setTheme(true);
    });
  }

  /**
   * Set the theme
   * @param {boolean} add - Whether to add dark mode or not
   */
  _setTheme(add = true) {
    if (add) {
      this._html.classList.add('dark');
      localStorage.theme = 'dark';
      this._iconDark.classList.toggle('hidden');
      this._iconLight.classList.toggle('hidden');
      this._mode.textContent = 'Lite Mode';
    } else {
      this._html.classList.remove('dark');
      localStorage.theme = 'light';
      this._iconDark.classList.toggle('hidden');
      this._iconLight.classList.toggle('hidden');
      this._mode.textContent = 'Dark Mode';
    }
  }

  /**
   * Initialize theme based on saved preferences or system settings
   */
  _toggleTheme() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this._setTheme(true);
      this._iconDark.classList.toggle('hidden');
      this._iconLight.classList.toggle('hidden');
    } else {
      this._setTheme(false);
    }
  }
}

// SearchView class extending the base View class
export class SearchView extends View {
  _parentEl = document.querySelector('#searchForm');
  _searchInput = this._parentEl.querySelector('input');

  /**
   * Add event handler for search form submission
   * @param {Function} handler - Function to handle search
   */
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      const query = this._searchInput.value.trim();
      handler(query);
      this._clearInput();
    });
  }

  /**
   * Clear the search input field
   */
  _clearInput() {
    this._searchInput.value = '';
  }
}

// ContinentsView class
export class ContinentsView {
  _parentEl = document.querySelector('#continents');

  /**
   * Add event handler for continent selection
   * @param {Function} handler - Function to handle continent selection
   */
  addHandlerContinents(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const data = btn.dataset.continent;
      handler(data);
      this._parentEl.querySelector('#btnContent').textContent = data;
    });
  }
}
