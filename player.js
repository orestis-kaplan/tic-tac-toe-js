/*jshint esversion: 6 */
class Player {
  constructor(name,symbol,moves){
    this.name = name;
    this.symbol = symbol;
    this.moves = moves;
  }

  turn(index,board){
    this.moves.push(index);
    board.updateSquare(index,this.symbol);
  }

}
