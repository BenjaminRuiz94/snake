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
console.log(board);
const grid = document.createElement("table");
grid.classList.add("snake-grid");
board.appendChild(grid);

function makeGrid() {
  for (let i = 0; i < 20; i++) {
    for (let k = 0; k < 20; k++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("cell");
      grid.appendChild(gridCell);
    }
  }
}

makeGrid();
//make sure you set up how you will display the game. How do we add the board to the div on the HTML??
//we may want to manipulate that board as well. Give it cells and our snake from above.
//we also want our apple to appear on the board. buttons as well for control.

//what about when the snake traverses the board? we will want to make a function for that.
//each tic() we want to remove the tail (sub array at position 0) and tack on a new head.

//set a function for What happens when your snake eats an apple?
//if the snake eats an apple, increase length of the snake by one. since the snake body is nested arrays,
//we would just not remove the tail section like we did above.
//we also want to make sure the apple disapears and re-appears somewhere random on the board.
