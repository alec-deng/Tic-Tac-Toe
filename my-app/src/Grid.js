import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {

  constructor() {
    super();
    this.state = {
      player: "X",
      board: ["", "", "", "", "", "", "", "", ""]
    }
  }

  check = () => {
    let board = this.state.board;
    for (let i = 0; i < 3; ++i) {
      if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== "") {
        return true;
      }
      if (board[i * 3] === board[i * 3 + 1] && board[i] === board[i * 3 + 2] && board[i] !== "") {
        return true;
      }
    }
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== "") {
      return true;
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2] !== "") {
      return true;
    }
    return false;
  }

  click = (index) => {
    console.log(index);
    let player = this.state.player;
    let board = this.state.board;

    if (board[index] !== "") {
      return;
    }

    board[index] = player;
    player = (player === "X") ? "O" : "X";
    this.setState({
      player: player,
      board: board
    });

    if (this.check()) {
      console.log("someone wins");
    }
  }

  render() {
    return (
      <div className='grid'>
        {this.state.board.map((cell,index) => {
          return (
            <div className='cell' key={index} onClick={() => {this.click(index)}}>
              <p className='player'>{cell}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;
