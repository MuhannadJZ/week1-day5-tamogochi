/*---------------------------- Variables (state) ----------------------------*/

// a.
const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

// b.
let timer;

// c.
let gameOver;

/*------------------------ Cached Element References ------------------------*/

// a.
const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

// b.
const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

// c.
const gameMessageEl = document.getElementById('message');

// d.
const resetBtnEl = document.getElementById('restart');

// Console log to confirm elements are grabbed
console.log(boredomStatEl, hungerStatEl, sleepinessStatEl);
console.log(playBtnEl, feedBtnEl, sleepBtnEl);
console.log(gameMessageEl, resetBtnEl);

/*-------------------------------- Functions --------------------------------*/

function init() {
  console.log('init function called');
  
  gameOver = false;

  timer = setInterval(runGame, 2000);

  render();
}

function runGame() {
  console.log('the game is running!');
}

function render() {
  // Placeholder for rendering game state
}

/*----------------------------- Event Listeners -----------------------------*/

// Start the game on page load
init();
