// init.js
import {
    updateBookList,
    handleShowMoreButtonClick,
} from './bookList.js';
import {handleBookPreviewClick} from "./bookPreviewClicks.js"
import { handleSearchFormSubmit } from './searchForm.js';
import { handleSettingsFormSubmit } from './settingsForm.js';
import { books, authors, genres, BOOKS_PER_PAGE, matches, page } from './data.js'

// Initialize the book list and other UI elements using the 'updateBookList' function
updateBookList(matches);

// Initialize theme based on user's preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('[data-settings-theme]').value = 'night';
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    document.querySelector('[data-settings-theme]').value = 'day';
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}

// Initialize UI element event listeners

// Search cancel button
document.querySelector('[data-search-cancel]').addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = false;
});

// Settings cancel button
document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false;
});

// Header search button
document.querySelector('[data-header-search]').addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = true;
    document.querySelector('[data-search-title]').focus(); // Focus on the search title input
});

// Header settings button
document.querySelector('[data-header-settings]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = true;
});

// List close button
document.querySelector('[data-list-close]').addEventListener('click', () => {
    document.querySelector('[data-list-active]').open = false;
});

// Settings form submit event
document.querySelector('[data-settings-form]').addEventListener('submit', handleSettingsFormSubmit);

// Initialize search genres dropdown

const genreHtml = document.createDocumentFragment(); // Create a document fragment to optimize DOM updates
const firstGenreElement = document.createElement('option'); // Create an option element for "All Genres"
firstGenreElement.value = 'any';
firstGenreElement.innerText = 'All Genres';
genreHtml.appendChild(firstGenreElement);

// Populate the genre dropdown with options
for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genreHtml.appendChild(element);
}

document.querySelector('[data-search-genres]').appendChild(genreHtml);

// Initialize search authors dropdown

const authorsHtml = document.createDocumentFragment(); // Create a document fragment to optimize DOM updates
const firstAuthorElement = document.createElement('option'); // Create an option element for "All Authors"
firstAuthorElement.value = 'any';
firstAuthorElement.innerText = 'All Authors';
authorsHtml.appendChild(firstAuthorElement);

// Populate the authors dropdown with options
for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authorsHtml.appendChild(element);
}

document.querySelector('[data-search-authors]').appendChild(authorsHtml);

// Initialize list button

// Update list button text and disable it if needed
document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0;

// Initialize search form

// Attach the search form submit handler function
document.querySelector('[data-search-form]').addEventListener('submit', handleSearchFormSubmit);


// Initialize show more button

// Attach the "show more" button click handler function
document.querySelector('[data-list-button]').addEventListener('click', handleShowMoreButtonClick);

// Initialize book preview click handler

// Attach the book preview click handler function to the list items container
document.querySelector('[data-list-items]').addEventListener('click', handleBookPreviewClick);
