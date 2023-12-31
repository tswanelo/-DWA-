import {  BOOKS_PER_PAGE } from './data.js'

// showMoreButton.js
export function handleShowMoreButtonClick() {
    const fragment = document.createDocumentFragment();

    // Adding more book previews to the list as the "Show more" button is clicked
    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
        const element = createBookPreview({ author, id, image, title });
        fragment.appendChild(element);
    }

    const bookListElement = document.querySelector('[data-list-items]');
    bookListElement.appendChild(fragment);

    // Updating the page number and the "Show more" button's status and label
    page += 1;
    const remainingCount = Math.max(matches.length - (page * BOOKS_PER_PAGE), 0);
    const listButton = document.querySelector('[data-list-button]');
    listButton.disabled = remainingCount <= 0;
    listButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${remainingCount})</span>
    `;
}
