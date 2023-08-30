// apple.js
// This module exports an 'apple' object and a function 'resetApplePosition'.


import { getRandomInt } from './main.js';
import { grid } from './canvas.js';

// 'apple' object represents the coordinates of an apple on a grid.
export const apple = {
  x: 320, // Initial x-coordinate of the apple
  y: 320  // Initial y-coordinate of the apple
};

// Function to reset the position of the apple on the grid.
export function resetApplePosition() {
  // Calculate random coordinates for the apple within the grid bounds.
  apple.x = getRandomInt(0, 25) * grid; // '0' to '25' multiplied by 'grid'
  apple.y = getRandomInt(0, 25) * grid; // ensures the apple appears on the grid lines.
}
