import {books, authors, BOOKS_PER_PAGE, matches, page } from './data.js';
import './genres_option.js';
import './authors_option.js';
import './Button_and_Overlay.js';
import './settings_form.js';
import './search_form.js';
import './showMore_Button.js';
import { BookDisplayComponent } from './book_preview.js';
// Make a copy of the BookDisplayComponent class to start using it and make it work.
const bookDisplayComponent = new BookDisplayComponent();


// Function to create a book preview element
function createBookPreview({ author, id, image, title }) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

    return element;
}

// Function to update theme based on user's preference
function updateTheme() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeValue = isDarkMode ? 'night' : 'day';

    document.querySelector('[data-settings-theme]').value = themeValue;
    document.documentElement.style.setProperty('--color-dark', isDarkMode ? '255, 255, 255' : '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', isDarkMode ? '10, 10, 20' : '255, 255, 255');
}

// Function to update the "Show more" button
function updateShowMoreButton() {
    const remainingBooks = matches.length - (page * BOOKS_PER_PAGE);
    const showMoreButton = document.querySelector('[data-list-button]');
    
    showMoreButton.innerText = `Show more (${remainingBooks > 0 ? remainingBooks : 0})`;
    showMoreButton.disabled = remainingBooks > 0;
}

// Function to handle the "Show more" button click
function handleShowMoreClick() {
    const fragment = document.createDocumentFragment();

    for (const book of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
        const element = createBookPreview(book);
        fragment.appendChild(element);
    }

    document.querySelector('[data-list-items]').appendChild(fragment);
    page += 1;
    updateShowMoreButton();
}

// Initial setup
const starting = document.createDocumentFragment();

for (const book of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = createBookPreview(book);
    starting.appendChild(element);
}

document.querySelector('[data-list-items]').appendChild(starting);
updateTheme();
updateShowMoreButton();

// Attach event listener to "Show more" button
document.querySelector('[data-list-button]').addEventListener('click', handleShowMoreClick);
