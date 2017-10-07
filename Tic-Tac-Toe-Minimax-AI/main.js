window.onload = startGame;

// 1. Basic Setup

var originalBoard;

const humanPlayer = 'O';
const aiPlayer = 'X';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const cells = document.querySelectorAll('.cell');

var replayButton = document.getElementById('restart');
replayButton.addEventListener('click', startGame);

function startGame() {
    document.querySelector('.end-game').style.display = 'none';
    originalBoard = Array.from(Array(9).keys()); // A Fancy way to say that original board is an array of numbers 0 ~ 9
    for(var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick);
    }
}

function turnClick(cell) {
    turn(cell.target.id, humanPlayer);
}

function turn(cellID, player) {
    originalBoard[cellID] = player;
    document.getElementById(cellID).innerText = player;
    let gameWon = checkWin(originalBoard, player);
    if(gameWon){
        gameOver(gameWon);
    }
}

// 3. Basic AI and winner notification

// 4. Minimax algorithm