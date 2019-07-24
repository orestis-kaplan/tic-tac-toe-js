/*jshint esversion: 6 */

let p1 = new Player('X');
let p2 = new Player('O');

function initGame(){
  document.getElementById('start').style.display = "none";
  gameBoard.createBoard();
  startGame(p1);
  resetGame(p1,p2);

}

function startGame(player1){
  let symbolsSize = 0;
  let boardBoxes = document.getElementById('box-container').children;
  for(let i = 0; i < boardBoxes.length; i++){
    let box = document.getElementById('box-'+i);
      box.addEventListener('click',()=>{
        let status = checkGameStatus(boardBoxes);
        if (box.innerText === "" && status != true){
          if( player1.turn === false){
            box.style.background = "radial-gradient(#e66465, #9198e5)";
            play(box,'X');
            symbolsSize++;
            status = checkGameStatus(boardBoxes,"Player 1 wins");
            player1.turn = true;
          }
          else{
            box.style.background = "radial-gradient(#ece5e5,#2a4f30)";
            play(box,'O');
            symbolsSize++;
            status = checkGameStatus(boardBoxes,"Player 2 wins");
            player1.turn = false;
          }
        }
        if ((symbolsSize%9===0) && (document.getElementById('status-info').innerText === "")){
          document.getElementById('status-info').innerText = "Its a tie!";
          document.getElementById('status-info').style.visibility = "visible";
          symbolsSize = 0;
        }
        else if(document.getElementById('status-info').innerText != "")
          symbolsSize = 0;
      });
    }
}

function checkGameStatus(boardBoxes,message){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let statusInfo = document.getElementById('status-info');
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (boardBoxes[a].innerText &&
       boardBoxes[a].innerText === boardBoxes[b].innerText &&
       boardBoxes[a].innerText === boardBoxes[c].innerText) {
         if(message != undefined){
           statusInfo.innerText = message;
           statusInfo.style.visibility = "visible";
         }
       return true;
    }
  }
}

function play(box,symbol){
  let symbolElement = document.createElement('span');
  symbolElement.className = 'symbol-style';
  if (!symbolElement.innerText)
    symbolElement.innerText = symbol;
  box.appendChild(symbolElement);
}

function resetGame(player1,player2){
  let statusInfo = document.getElementById('status-info');
  let container = document.getElementById('buttons-place');
  let resetButton = document.createElement('button');
  resetButton.className = 'btn btn-primary';
  resetButton.innerText = "Reset Game";
  container.appendChild(resetButton);
  resetButton.addEventListener('click',()=>{
    document.getElementById('status-info').style.visibility = "hidden";
    player1.turn = false;
    player2.turn = false;
    let boardBoxes = document.getElementById('box-container').children;
    for(let box of boardBoxes){
      box.style.background = "royalblue";
      box.innerText = "";
    }
  });
}
