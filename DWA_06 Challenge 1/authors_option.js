import { authors } from './data.js';

function createAuthorOption(id, name) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    return element;
}

function populateAuthorOptions(containerSelector, authorsData) {
    const authorsHtml = document.createDocumentFragment();
    const firstAuthorElement = createAuthorOption('any', 'All Authors');
    authorsHtml.appendChild(firstAuthorElement);

    for (const [id, name] of Object.entries(authorsData)) {
        const authorElement = createAuthorOption(id, name);
        authorsHtml.appendChild(authorElement);
    }

    const container = document.querySelector(containerSelector);
    container.appendChild(authorsHtml);
}

populateAuthorOptions('[data-search-authors]', authors);
