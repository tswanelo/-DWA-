// Importing data from 'data.js' module
import { books, authors } from './data.js';

// Adding a click event listener to an element with a 'data-list-items' attribute
document.querySelector('[data-list-items]').addEventListener('click', (event) => {
    // Getting an array of nodes in the event's path (accounting for browser compatibility)
    const pathArray = Array.from(event.path || event.composedPath());
    let active = null;

    // Looping through the nodes in the path array
    for (const node of pathArray) {
        if (active) break;

        // Checking if the current node has a 'data-preview' attribute
        if (node?.dataset?.preview) {
            let result = null;

            // Searching for a book with a matching ID in the 'books' array
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook;
            }

            // Assigning the found book to the 'active' variable
            active = result;
        }
    }

    // Displaying book information if a matching book was found
    if (active) {
        // Opening an element with 'data-list-active' attribute
        document.querySelector('[data-list-active]').open = true;
        
        // Updating image sources and text content based on the active book
        document.querySelector('[data-list-blur]').src = active.image;
        document.querySelector('[data-list-image]').src = active.image;
        document.querySelector('[data-list-title]').innerText = active.title;
        document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
        document.querySelector('[data-list-description]').innerText = active.description;
    }
});
