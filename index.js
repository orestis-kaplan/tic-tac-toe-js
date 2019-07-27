/*jshint esversion: 6 */
const p1 = new Player("orestis", "X", []);
const p2 = new Player("efrain", "O", []);
let currentPlayer = p1;
let nextPlayer = p2;

function initGame() {
  createElements();
  buildSquares(Board.boxes, true);
  reset();
}

function createElements() {
  let container = document.createElement('div');
  container.className = 'boxes';
  document.getElementsByClassName('container')[0].appendChild(container);
}

function reset() {
  document.getElementById('start').style.display = "none";
  document.getElementById('reset').style.display = "inline-block";
  document.getElementById('reset').addEventListener('click', () => {
    let statusInfo = document.getElementById('status-info');
    statusInfo.style.visibility = "hidden";
    createElements();
    currentPlayer = p1;
    p1.moves = [];
    p2.moves = [];
    Board.resetBoard();
    buildSquares(Board.boxes, true);
  });
}

const buildSquares = (boxes, toggleGame) => {
  boxes.forEach(function(box) {
    let square = document.createElement('div');
    square.className = "box-style";
    let container = document.getElementsByClassName('boxes')[0];
    container.appendChild(square);
    square.addEventListener('click', (event) => {
      if (toggleGame && square.innerText === "") {
        playerMove(box, square);
        if (Board.checkWin()) {
          toggleGame = false;
          printMessage('WIN');
        } else if (Board.isFull(p1, p2)) {
          toggleGame = false;
          printMessage('DRAW');
        }
      }
    });
  });
};

function printMessage(status) {
  let statusInfo = document.getElementById('status-info');
  if (status === 'WIN') {
    statusInfo.innerText = nextPlayer.name;
    statusInfo.style.visibility = "visible";
  }
  else if (status === 'DRAW'){
    statusInfo.innerText = "It's a draw";
    statusInfo.style.visibility = "visible";
  }
}

function playerMove(index, squareDiv) {
  if (currentPlayer === p1) {
    squareDiv.style.background = "radial-gradient(#e66465, #9198e5)";
    p1.turn(index, Board);
    nextPlayer = p1;
    currentPlayer = p2;
  } else {
    squareDiv.style.background = "radial-gradient(#ece5e5,#2a4f30)";
    p2.turn(index, Board);
    nextPlayer = p2;
    currentPlayer = p1;
  }
}
