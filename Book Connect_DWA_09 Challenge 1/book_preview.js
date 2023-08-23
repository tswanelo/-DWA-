// Importing the 'books' and 'authors' arrays from the 'data.js' module
import { books, authors } from './data.js';

// Defining a class for the book display component
export class BookDisplayComponent {
    constructor() {
        // Initializing DOM elements using attribute selectors
        this.activeBookElement = document.querySelector('[data-list-active]');
        this.blurImageElement = document.querySelector('[data-list-blur]');
        this.imageElement = document.querySelector('[data-list-image]');
        this.titleElement = document.querySelector('[data-list-title]');
        this.subtitleElement = document.querySelector('[data-list-subtitle]');
        this.descriptionElement = document.querySelector('[data-list-description]');

        // Adding a click event listener to the list items container
        document.querySelector('[data-list-items]').addEventListener('click', this.handleItemClick.bind(this));
    }

    // Method to display book information based on the provided bookId
    displayBookInformation(bookId) {
        // Find the book with the given id from the 'books' array
        const active = books.find(book => book.id === bookId);

        if (active) {
            // Update the UI elements with the book information
            this.activeBookElement.open = true;
            this.blurImageElement.src = active.image;
            this.imageElement.src = active.image;
            this.titleElement.innerText = active.title;
            this.subtitleElement.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
            this.descriptionElement.innerText = active.description;
        }
    }

    // Event handler for clicking on a book item
    handleItemClick(event) {
        // Create an array of DOM elements in the event's path
        const pathArray = Array.from(event.path || event.composedPath());

        // Iterate through the path elements to find the book preview data
        for (const node of pathArray) {
            if (node?.dataset?.preview) {
                // Call the method to display book information using the preview data
                this.displayBookInformation(node.dataset.preview);
                break; // Exit the loop once a valid node is found
            }
        }
    }
}
