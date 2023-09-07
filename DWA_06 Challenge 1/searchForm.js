// searchForm.js
import { updateBookList } from './bookList.js';
import { books, BOOKS_PER_PAGE, page, matches} from './data.js'

// Function to handle the submission of the search form
export function handleSearchFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    // Filtering books based on user-selected filters
    for (const book of books) {
        let genreMatch = filters.genre === 'any';

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) {
                genreMatch = true;
            }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (filters.author === 'any' || book.author === filters.author) &&
            genreMatch
        ) {
            result.push(book);
        }
    }

    // Updating page and matches with filtered results
    page = 1;
    matches = result;

    // Updating the book list and showing/hiding list message
    updateBookList(matches);
    const listMessage = document.querySelector('[data-list-message]');
    if (result.length < 1) {
        listMessage.classList.add('list__message_show');
    } else {
        listMessage.classList.remove('list__message_show');
    }

    // Updating the "Show more" button's status and label
    const listButton = document.querySelector('[data-list-button]');
    listButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1;
    listButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `;

    // Scrolling to the top and closing the search overlay
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('[data-search-overlay]').open = false;
}