// main.js

import { subtractHandler, addHandler, resetHandler } from './handlers.js';

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"]');

number.value = 10;

subtract.addEventListener('click', () => subtractHandler(number, subtract, add));
add.addEventListener('click', () => addHandler(number, subtract, add));
reset.addEventListener('click', () => resetHandler(number, subtract, add));


