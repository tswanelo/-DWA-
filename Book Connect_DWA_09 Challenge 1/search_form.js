import { books, authors, BOOKS_PER_PAGE } from './data.js';

document.querySelector('[data-search-form]').addEventListener('submit', handleSearchSubmit);

function handleSearchSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = filterBooks(filters);

    updatePageAndMatches(result);
    updateListMessage(result);
    updateListItems(result);
    updateListButtonState();

    scrollToTop();
    closeSearchOverlay();
}

function filterBooks(filters) {
    return books.filter(book => (
        (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
        (filters.author === 'any' || book.author === filters.author) &&
        (filters.genre === 'any' || book.genres.includes(filters.genre))
    ));
}

function updatePageAndMatches(result) {
    page = 1;
    matches = result;
}

function updateListMessage(result) {
    const listMessage = document.querySelector('[data-list-message]');
    if (result.length < 1) {
        listMessage.classList.add('list__message_show');
    } else {
        listMessage.classList.remove('list__message_show');
    }
}

function updateListItems(result) {
    const listItemsContainer = document.querySelector('[data-list-items]');
    listItemsContainer.innerHTML = '';
    const newItems = document.createDocumentFragment();

    for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
        const element = createPreviewElement(author, id, image, title);
        newItems.appendChild(element);
    }

    listItemsContainer.appendChild(newItems);
}

function createPreviewElement(author, id, image, title) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

    return element;
}

function updateListButtonState() {
    const listButton = document.querySelector('[data-list-button]');
    const remainingCount = Math.max(matches.length - (page * BOOKS_PER_PAGE), 0);

    listButton.disabled = remainingCount < 1;
    listButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${remainingCount})</span>
    `;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeSearchOverlay() {
    document.querySelector('[data-search-overlay]').open = false;
}
