// main.js 


import { canvas, context, grid } from './canvas.js'; // Importing canvas and context
import { snake } from './snake.js'; 
import { apple, resetApplePosition } from './apple.js'; // Importing the apple object and resetApplePosition function
import { setupEventListener } from './eventlistener.js'; // Importing the setupEventListener function

// Initialize variables for the game.
let count = 0; // Counter to control game speed
let score = 0; // Player's score

// Function to generate a random integer between 'min' and 'max'.
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// The main game loop
function loop() {
  requestAnimationFrame(loop);

  // Control the game speed by skipping frames.
  if (++count < 9) { // snake speed
    return;
  }
  count = 0;

  // Clear the canvas before drawing new frame.
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Update snake's position based on its direction.
  snake.x += snake.dx;
  snake.y += snake.dy;

  // Wrap the snake around the canvas edges if it goes out of bounds.
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // Add current snake's position to the beginning of its cells array.
  snake.cells.unshift({ x: snake.x, y: snake.y });

  // Remove the last cell if the snake's length exceeds maxCells.
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // Draw the apple on the canvas.
  context.fillStyle = 'green'; // apple color set
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  // Draw the snake and handle collisions with the apple and itself.
  context.fillStyle = 'orange'; // snake color set
  snake.cells.forEach(function (cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // Check if the snake's head collides with the apple.
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      resetApplePosition();
      score++;
    }

    // Check for collisions between the snake's head and its body.
    for (let i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        // Reset game parameters after collision.
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        resetApplePosition();
      }
    }
  });

  // Display the player's score on the canvas.
  context.fillStyle = 'red'; // score color set
  context.font = '15px Arial';
  context.fillText('Score: ' + score, 10, 20);
}

// Set up keyboard event listener to control the snake's direction.
setupEventListener();

// Start the game loop.
requestAnimationFrame(loop);
