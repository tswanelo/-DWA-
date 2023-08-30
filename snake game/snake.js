// snake.js 

import { grid } from './canvas.js';

// 'snake' object holds properties related to the snake in the game.
export const snake = {
  x: 160,      // Initial x-coordinate of the snake's head
  y: 160,      // Initial y-coordinate of the snake's head
  dx: grid,    // Initial movement increment in the x-direction (horizontal movement)
  dy: 0,       // Initial movement increment in the y-direction (vertical movement)
  cells: [],   // Array to store the coordinates of each segment of the snake's body
  maxCells: 4  // Initial length of the snake
};
