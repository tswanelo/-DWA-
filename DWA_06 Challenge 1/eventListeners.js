import { handleSettingsFormSubmit} from './settingsForm.js';
import { handleShowMoreButtonClick } from './showMore_Button.js';
import { handleBookPreviewClick } from './bookPreviewClicks.js';
import { handleSearchFormSubmit } from './searchForm.js'; // Replace with your search form module

// Utility function to create and populate dropdown options
function populateDropdownOptions(container, data, defaultOptionText) {
    const fragment = document.createDocumentFragment();
    const defaultOption = document.createElement('option');
    defaultOption.value = 'any';
    defaultOption.innerText = defaultOptionText;
    fragment.appendChild(defaultOption);

    for (const [id, name] of Object.entries(data)) {
        const option = document.createElement('option');
        option.value = id;
        option.innerText = name;
        fragment.appendChild(option);
    }

    container.appendChild(fragment);
}

// Attach event listeners

// Initialize search form
document.querySelector('[data-settings-form]').addEventListener('submit', handleSettingsFormSubmit);
document.querySelector('[data-search-form]').addEventListener('submit', handleSearchFormSubmit);
document.querySelector('[data-list-button]').addEventListener('click', handleShowMoreButtonClick);
document.querySelector('[data-list-items]').addEventListener('click', handleBookPreviewClick);

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = false;
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false;
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = true;
    document.querySelector('[data-search-title]').focus();
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = true;
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
    document.querySelector('[data-list-active]').open = false;
});


// Initialize dropdowns
populateDropdownOptions(document.querySelector('[data-search-genres]'), genres, 'All Genres');
populateDropdownOptions(document.querySelector('[data-search-authors]'), authors, 'All Authors');

// Initialize list button
const listButton = document.querySelector('[data-list-button]');
listButton.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
listButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0;


