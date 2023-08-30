// eventlistener.js
// This module exports a function 'setupEventListener' to handle keyboard input.

import { snake } from './snake.js';
import { grid } from './canvas.js';

// Define constants for key codes.
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

// Function to set up event listener for keyboard input.
export function setupEventListener() {
  document.addEventListener('keydown', function (e) {
    // Check the key pressed and update snake's direction accordingly.
    if (e.which === KEY_LEFT && snake.dx === 0) {
      // Left arrow: Update direction to left and reset vertical movement.
      snake.dx = -grid;
      snake.dy = 0;
    } else if (e.which === KEY_UP && snake.dy === 0) {
      // Up arrow: Update direction to up and reset horizontal movement.
      snake.dy = -grid;
      snake.dx = 0;
    } else if (e.which === KEY_RIGHT && snake.dx === 0) {
      // Right arrow: Update direction to right and reset vertical movement.
      snake.dx = grid;
      snake.dy = 0;
    } else if (e.which === KEY_DOWN && snake.dy === 0) {
      // Down arrow: Update direction to down and reset horizontal movement.
      snake.dy = grid;
      snake.dx = 0;
    }
  });
}
