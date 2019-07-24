/*jshint esversion: 6 */
const gameBoard = (function(){
  //Private fields
  let numberOfBoxes = 9;
  let boxes= document.createElement('div');
  boxes.id = 'box-container';
  boxes.className = 'boxes';
  let container = document.getElementsByClassName('container')[0];
  container.appendChild(boxes);

  const buildBoxes = function(){
    for(let i = 0; i < numberOfBoxes; i++){
      let box = document.createElement('div');
      box.id = 'box-' + i;
      box.className = 'box-style';
      boxes.appendChild(box);
    }
  };

  return {
    createBoard: buildBoxes
  };
})();
