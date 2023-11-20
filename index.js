/*

    Gamelet: a starting point for writing games
    Author: Chris Minnick
    Version: 1.0

    Instructions: 
    Include gamelet.js in an HTML document containing an element with an id of 'ball'.
    The script will detect when the left or write arrow key is pressed and will move the ball element accordingly.

*/

const ball = document.getElementById("ball"); // Get the ball

document.addEventListener("keydown", handleKeyPress); // Listen for keys
let position = 0;
/*
handleKeyPress
responds to certain key presses by updating the position
*/

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position === position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // Reposition the ball
}

function refresh() {
  ball.style.left = position + "px";
}
