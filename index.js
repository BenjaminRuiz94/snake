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

const board = document.querySelector(".board");
//selecting our board class from html and giving it a variable for JS to play with.
const grid = document.createElement("table");
//here we gave variable name grid to new element we created, and then we can add a .class and pin to board.
grid.classList.add("snake-grid"); //we add the class so we can edit in index.css
board.appendChild(grid); //pins the element to the board. This new elem

function makeGrid() {
  //assign variable to x and y cooridnates as well as counter.
  for (let i = 0; i < 20; i++) {
    for (let k = 0; k < 20; k++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("cell");
      //assign ids to cells to assist with navigation and selection - need way for .css to target and make changes.
      gridCell.setAttribute("grid-cell", [0][0]); //need to figure out how to assign index values like a grid.. For loop?
      //will need a counter that checks when we are at the end of grid,
      // when hit 21, increment y coordinate, and reset x and counter to 0 - do this with if()

      grid.appendChild(gridCell);
    }
  }
}

makeGrid();

//create a function to 'draw' our snake on the grid. remember, the grid is nested arrays.
//need to loop over our snake, and get the indexes of each body segment, and then color those sections on our grid.
//also need to include how our snake moves forward.
function drawSnek() {
  /* for(let */
}

//make sure you set up how you will display the game. How do we add the board to the div on the HTML??
//we may want to manipulate that board as well. Give it cells and our snake from above.
//we also want our apple to appear on the board. buttons as well for control.

//what about when the snake traverses the board? we will want to make a function for that.
//each tic() we want to remove the tail (sub array at position 0) and tack on a new head.

//set a function for What happens when your snake eats an apple?
//if the snake eats an apple, increase length of the snake by one. since the snake body is nested arrays,
//we would just not remove the tail section like we did above.
//we also want to make sure the apple disapears and re-appears somewhere random on the board.
