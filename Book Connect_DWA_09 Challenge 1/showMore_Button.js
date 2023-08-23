import { authors, BOOKS_PER_PAGE, matches, page } from './data.js';

function createPreviewButton(bookData) {
    const { author, id, image, title } = bookData;

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

function renderPage(pageNumber) {
    const startIndex = pageNumber * BOOKS_PER_PAGE;
    const endIndex = (pageNumber + 1) * BOOKS_PER_PAGE;
    const pageData = matches.slice(startIndex, endIndex);

    const fragment = document.createDocumentFragment();

    for (const bookData of pageData) {
        const element = createPreviewButton(bookData);
        fragment.appendChild(element);
    }

    document.querySelector('[data-list-items]').appendChild(fragment);
    page += 1;
}

document.querySelector('[data-list-button]').addEventListener('click', () => {
    renderPage(page);
});
