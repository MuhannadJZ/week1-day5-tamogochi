/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/


const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};





let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat');
console.log(boredomStatEl);
const hungerStatEl = document.querySelector('#hunger-stat');
console.log(hungerStatEl);
const sleepinessStatEl = document.querySelector('#sleepiness-stat');
console.log(sleepinessStatEl);

const playButtonEl = document.querySelector('#play');
console.log(playButtonEl);
const feedButtonEl = document.querySelector('#feed');
console.log(feedButtonEl);



const sleepButtonEl = document.querySelector('#sleep');
console.log(sleepButtonEl);

const gameMessageEl = document.querySelector('#message');
console.log(gameMessageEl);
const resetButtonEl = document.querySelector('#restart');
console.log(resetButtonEl);



/*-------------------------------- Functions --------------------------------*/


function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

function updateStates() {
  state.boredom = state.boredom + getRandomNumber();
  state.hunger = state.hunger + getRandomNumber();

  state.sleepiness = state.sleepiness + getRandomNumber();
}


function checkGameOver() {
  if (
    state.boredom >= 10 ||
    state.hunger >= 10 ||
    state.sleepiness >= 10
  ) {
    gameOver = true;
  }
}
function render() {
  boredomStatEl.textContent = state.boredom;

  hungerStatEl.textContent = state.hunger;
  sleepinessStatEl.textContent = state.sleepiness;

  if (gameOver) {
    clearInterval(timer);
    resetButtonEl.classList.remove('hidden');


    gameMessageEl.classList.remove('hidden');
  }
}


function runGame() {
  updateStates();
  checkGameOver();
  render();
}




function init() {
  console.log('init function called');

  resetButtonEl.classList.add('hidden');
  gameMessageEl.classList.add('hidden');

  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;

  gameOver = false;
  timer = setInterval(runGame, 2000);
  render();
}

/*----------------------------- Event Listeners -----------------------------*/
function playButtonClick() {
  state.boredom = 0;
  render();
}

function feedButtonClick() {
  state.hunger = 0;
  render();
}

function sleepButtonClick() {
  state.sleepiness = 0;
  render();
}

playButtonEl.addEventListener('click', playButtonClick);
feedButtonEl.addEventListener('click', feedButtonClick);
sleepButtonEl.addEventListener('click', sleepButtonClick);

init();

