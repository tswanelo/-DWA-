// handlers.js

import { STEP_AMOUNT, MIN_NUMBER, MAX_NUMBER } from './Exports.js';

export const subtractHandler = (number, subtract, add) => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

export const addHandler = (number, subtract, add) => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;

  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

export const resetHandler = (number, subtract, add) => {
  number.value = 0;
  subtract.disabled = true;
  add.disabled = false;

  alert("The counter has been reset.");
};
