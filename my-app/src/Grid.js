import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {

  constructor() {
    super();
    this.state = {
      win: true,
      player: "X",
      board: ["", "", "", "", "", "", "", "", ""],
      modifiable: [true, true, true, true, true, true, true, true, true],
      count: 0,
      preview: false
    }
  }

  startGame = () => {
    this.setState({win: false});
  }

  endGame = () => {
    this.setState({win: true});
  }

  setPlayer = (player) => {
    this.setState({player: player});
  }

  resetGrid = () => {
    this.setState({
      win: false,
      board: ["", "", "", "", "", "", "", "", ""],
      modifiable: [true, true, true, true, true, true, true, true, true],
      count: 0,
      preview: false
    })
  }
  
  winner = (a, b, c) => {
    let board = this.state.board;
    board[a] = <h1 className='win'>{board[a]}</h1>;
    board[b] = <h1 className='win'>{board[b]}</h1>;
    board[c] = <h1 className='win'>{board[c]}</h1>;
    this.setState({board: board});
    this.props.setWinner(this.state.player);
  }

  check = () => {
    let board = this.state.board;
    for (let i = 0; i < 3; ++i) {
      if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== "") {
        this.winner(i, i+3, i+6);
        return true;
      }
      if (board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2] && board[i * 3] !== "") {
        this.winner(i*3, i*3+1, i*3+2);
        return true;
      }
    }
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== "") {
      this.winner(0, 4, 8);
      return true;
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2] !== "") {
      this.winner(2, 4, 6);
      return true;
    }
    return false;
  }

  click = (index) => {
    if (this.state.win || this.state.modifiable[index] === false) {
      return;
    }
    
    let player = this.state.player;
    let board = this.state.board;
    let count = this.state.count;
    let modifiable = this.state.modifiable;

    board[index] = player;
    modifiable[index] = false;
    player = (player === "X") ? "O" : "X";
    ++count;
    this.setState({
      player: player,
      modifiable: modifiable,
      board: board,
      count: count
    });

    if (this.check()) {
      this.setState({
        win: true
      });
    } else if (this.state.count === 8) {
      this.props.setWinner("Tie!");
      this.setState({win: true});
    }
  }

  enablePreview = (index) => {
    if (this.state.win || this.state.modifiable[index] === false) {
      return;
    }
    let player = this.state.player;
    let board = this.state.board;
    board[index] = <span style={{opacity: 0.4}}>{player}</span>;
    this.setState({
      board: board,
      preview: true
    });
  }

  disablePreview = (index) => {
    if (this.state.win || this.state.modifiable[index] === false) {
      return;
    }
    let board = this.state.board;
    board[index] = "";
    this.setState({
      board: board,
      preview: false
    });
  }

  render() {
    return (
      <div className='grid'>
        {this.state.board.map((cell,index) => {
          return (
            <div className='cell' key={index} onClick={() => {this.click(index)}}
            onMouseEnter={() => {this.enablePreview(index)}} onMouseLeave={() => {this.disablePreview(index)}}>
              <div className='player'>{cell}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;
