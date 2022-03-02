//our snake body. snake at the start, and what his next direction will be. Your game state at start.
let snake = {
  body: [
    [10, 5],
    [10, 6],
    [10, 7],
    [10, 8],
  ],
  nextDirection: [1, 0],
};
//apple location at start. We would want to set this to randomly generate anywhere on the board where the snake is not.
let apple = {
  location: [14, 3],
};

//game state. What are the starting parameters.
//We will need to know what the status of the game is. Current score, and a function to increase the score.
//We will also need a function to change the game status to end if the snake hits the wall or himself.
//Snake hitting wall or himself would be individual functions that need to be defined below after moveforward
gameState = {
  currentScore: 0,
  gameStatus: "Start",
  //upScore function
};

//targeting window and adding event listener for arrow keys.
//window.addEventListener('keydown' keyLog)

//make sure you set up how you will display the game. How do we add the board to the div on the HTML??
//we may want to manipulate that board as well. Give it cells and our snake from above. buttons as well for control.

const board = document.querySelector(".board");
//selecting our board class from html and giving it a variable for JS to play with.
const grid = document.createElement("table");
//here we gave variable name grid to new element we created, and then we can add a .class and pin to board.
grid.classList.add("snake-grid"); //we add the class so we can edit in index.css
board.appendChild(grid); //pins the element to the board. This new elem

//need a display section for the score and controls!
const displayArea = document.createElement("div");
displayArea.classList.add("scoreBoard");
board.appendChild(displayArea);
displayArea.innerText = gameState.currentScore; //we've got our score, but no 'control instructions'

function makeGrid() {
  //assign variable to x and y cooridnates as well as counter.
  for (let i = 0; i < 20; i++) {
    for (let k = 0; k < 20; k++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("cell");
      //assign ids to cells to assist with navigation and selection - need way for .css to target and make changes.
      gridCell.id = `${i}-${k}`; //need to assign index values like a grid while in for loop. Template literal. Literal template.
      //Template literal ^^^  --- this means the literal values of i and k. now the gridCell id = i-k. first box would be 0-0. second 0-1. ect.

      grid.appendChild(gridCell);
    }
  }
}

makeGrid();

//create a function to 'draw' our snake on the grid. remember, the grid is nested arrays.
//need to loop over our snake, and get the indexes of each body segment, and then color those sections on our grid.
//also need to include how our snake moves forward.
function drawSnake() {
  for (let i = 0; i < snake.body.length; i++) {
    const snakePart = snake.body[i];
    let x = snakePart[0];
    let y = snakePart[1];
    const snakePartId = `${x}-${y}`;
    const snek = document.getElementById(snakePartId);
    snek.classList.add("snek");
  }
}
drawSnake();

//we also want our apple to appear on the board.
function drawApple() {
  const appleSpot = apple.location;
  let x = appleSpot[0];
  let y = appleSpot[1];
  const appleSpotId = `${x}-${y}`;
  const point = document.getElementById(appleSpotId);
  point.classList.add("apple");
}

drawApple();

//what about when the snake traverses the board? we will want to make a function for that.
//each tic() we want to remove the tail (sub array at position 0) and tack on a new head.
function snakeMove() {
  //nested functions in here. what we want to happen as our snake moves across the board in order.
}

//to simply move the snake in a new direction, we would need to

//set a function for What happens when your snake eats an apple?

//if the snake eats an apple, increase length of the snake by one. since the snake body is nested arrays,
//we would just not remove the tail section like we did above.

//we also want to make sure the apple disapears and re-appears somewhere random on the board.

/* what about changing direction of the snake? HTML DOM elements and event handlers. You will need to set
an event handler function that logs what key was pressed on the keyboard, nested inside a function that 
logs what key was pressed to change the direction of the snake. */
