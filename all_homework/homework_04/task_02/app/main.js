/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
     
        if (winner) {
            return winner 
          } else if (board.includes('')) {
            return null 
          } else {
            return 'T' // tie
          }
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    if ( win === 'T' ) {
        messages.textContent = `It's a cat's game!`;
        console.log(0 + " -> Cat's game");
      } else if (win) { 
        messages.textContent = `${win} wins the game!`;
        if (win === 'X') {
            console.log(1 + " -> \"X\" won");
        } else {
            console.log(2 + " -> \"0\" won");
        }
      } else {
        messages.textContent = `It's ${turn}'s turn!`;
        console.log(-1 + " The board is not yet finished");
      }
    
};

init();