// bookList.js
import { createBookPreview } from './bookPreview.js'; // Make sure the import is correct
import { BOOKS_PER_PAGE, matches, page } from './data.js'

export function updateBookList(booksToDisplay) {
    const bookListElement = document.querySelector('[data-list-items]');
    bookListElement.innerHTML = '';

    // Creating a fragment to efficiently add book previews to the DOM
    const fragment = document.createDocumentFragment();
    for (const book of booksToDisplay) {
        const previewElement = createBookPreview(book);
        fragment.appendChild(previewElement);
    }

    // Appending the fragment to the book list element
    bookListElement.appendChild(fragment);
}

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
