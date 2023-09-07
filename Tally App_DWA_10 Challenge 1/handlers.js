// handlers.js
import { STEP_AMOUNT, MIN_NUMBER, MAX_NUMBER } from './main.js';

// Handler function for subtract button
export const subtractHandler = (number, subtract, add) => {
  // Calculate the new value by subtracting the step amount
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  
  // Update the input value with the new calculated value
  number.value = newValue;

  // Enable the 'add' button since subtraction was performed
  if (add.disabled === true) {
    add.disabled = false;
  }

  // Disable the 'subtract' button if the new value reaches or goes below the minimum allowed value
  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

// Handler function for add button
export const addHandler = (number, subtract, add) => {
  // Calculate the new value by adding the step amount
  const newValue = parseInt(number.value) + STEP_AMOUNT;

  // Update the input value with the new calculated value
  number.value = newValue;

  // Enable the 'subtract' button since addition was performed
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  // Disable the 'add' button if the new value reaches or goes beyond the maximum allowed value
  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

// Handler function for reset button
export const resetHandler = (number, subtract, add) => {
  // Reset the input value to 0
  number.value = 0;

  // Disable the 'subtract' button as the value is now at its minimum
  subtract.disabled = true;

  // Enable the 'add' button after reset
  add.disabled = false;

  // Display an alert to notify that the counter has been reset
  alert("The counter has been reset.");
};
