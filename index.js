// Game state
let phase = "waiting"; // waiting | stretching | turning | walking | transitioning | falling
let lastTimestamp; // The timestamp of the previous animation cycle

let heroX; // Changes when moving forward
let heroY; // Only changes when falling
let sceneOffset; // Moves the whole game

let platforms = [];
let sticks = [];

let score = 0;

// Configuration


// Getting the canvas element
const canvas = document.getElementById("game");

// Getting the drawing context
const ctx = canvas.getContext("2d");

// Further UI elements
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart");

// Start game
resetGame();

// Resets game state and layout
function resetGame() {


  draw();
}

function draw() {

}

window.addEventListener("mousedown", function (event) {

});

window.addEventListener("mouseup", function (event) {

});

function animate(timestamp) {

}

