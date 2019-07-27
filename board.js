/*jshint esversion: 6 */
const Board = (function() {
  //Private fields
  const boxes = [0, 1, 2,
                 3, 4, 5,
                 6, 7, 8];
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let tableBoard = new Array(9);

  const isFull = (p1,p2) => {
    if((p1.moves.length+p2.moves.length) === tableBoard.length){
      return true;
    }
  };

  const checkWin = (winningCombinations) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (tableBoard[a] && tableBoard[a] === tableBoard[b] && tableBoard[a] === tableBoard[c]) {
        return true;
      }
    }
    return false;
  };

  const updateSquare = (index,symbol) => {
    let container = document.getElementsByClassName('boxes')[0].children;
    if (container[index].innerText === "") {
      tableBoard[index] = symbol;
      container[index].innerText = symbol;
    }
  };

  const resetBoard = () => {
    let containerChildren = document.getElementsByClassName('boxes')[0];
    containerChildren.remove();
    tableBoard =  new Array(9);
  };

  return {
    boxes,
    isFull,
    checkWin: ()=>{return checkWin(winningCombinations);},
    updateSquare,
    resetBoard
  };
})();
