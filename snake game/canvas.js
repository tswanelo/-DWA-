// canvas.js
// This module exports constants 'canvas', 'context', and 'grid' related to the game.

// Get the 'game' canvas element from the HTML document by its ID.
export const canvas = document.getElementById('game');

// Get the 2D rendering context of the canvas, used to draw graphics.
export const context = canvas.getContext('2d');

// 'grid' represents the size of each grid cell on the canvas.
export const grid = 10;










/*
Think of a canvas like a blank piece of paper where a computer program can draw pictures.
 It's like a digital drawing board that programmers can use to create images, shapes, 
 and designs. This is often used in making games, animations, and graphs on websites.

For example, if you want to draw a smiley face, you'd use the canvas to draw circles 
for the eyes and a curved line for the mouth.
 The canvas is a way for the computer to show visual stuff that the program creates.
 */

/*
 To draw on this canvas using code, you need a special tool. This special tool is called
  a "2D drawing context." It's like a set of instructions that tells the computer what and how to draw.

 When you use the getContext('2d') command, it's like telling the computer, "Hey, give me that special 
 drawing tool for 2D stuff." Once you have that tool, you can use it to draw all sorts of things on the
  canvas, like shapes, colors, lines, and more.
 
 So, getContext('2d') is just a way to get the drawing tools you need to make drawings on a web page.
 */