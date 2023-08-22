import { genres } from './data.js';

function createGenreOption(id, name) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    return element;
}

const genreHtml = document.createDocumentFragment();
const firstGenreElement = createGenreOption('any', 'All Genres');
genreHtml.appendChild(firstGenreElement);

for (const [id, name] of Object.entries(genres)) {
    const element = createGenreOption(id, name);
    genreHtml.appendChild(element);
}

const searchGenresContainer = document.querySelector('[data-search-genres]');
searchGenresContainer.appendChild(genreHtml);

