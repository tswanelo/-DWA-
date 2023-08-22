// Importing data from 'data.js' module
import { books, authors } from './data.js';

// Function to display book information
function displayBookInformation(bookId) {
    const active = books.find(book => book.id === bookId);

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
}

// Adding a click event listener to an element with a 'data-list-items' attribute
document.querySelector('[data-list-items]').addEventListener('click', (event) => {
    // Getting an array of nodes in the event's path (accounting for browser compatibility)
    const pathArray = Array.from(event.path || event.composedPath());

    // Looping through the nodes in the path array
    for (const node of pathArray) {
        // Checking if the current node has a 'data-preview' attribute
        if (node?.dataset?.preview) {
            displayBookInformation(node.dataset.preview);
            break;
        }
    }
});
