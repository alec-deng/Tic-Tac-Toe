import React, { Component } from 'react';
import Grid from './Grid.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      xWins: 0,
      oWins: 0,
      winner: "Tic-Tac-Toe"
    }
  }

  outputWinner = (player) => {
    if (player === "X") {
      this.setState({winner: "X wins!"});
    } else if (player === "O") {
      this.setState({winner: "O wins!"});
    } else {
      this.setState({winner: player});
    }
  }

  setWinner = (player) => {
    let x = this.state.xWins;
    let o = this.state.oWins;
    this.outputWinner(player);
    if (player === "X") {
      ++x;
    } else if (player === "O") {
      ++o;
    }
    this.setState({
      xWins: x,
      oWins: o
    });
  }

  nextRound = () => {
    if (this.state.winner === "Tic-Tac-Toe") {
      return;
    }
    this.setState({
      winner: "Tic-Tac-Toe"
    });
    this.child.resetGrid();
  }

  resetGame = () => {
    this.setState({
      xWins: 0,
      oWins: 0,
      winner: "Tic-Tac-Toe"
    });
    this.child.resetGrid();
  }

  render() {
    return (
      <div className="App">
        <div className="xPlayer">X's Score: {this.state.xWins}</div>
        <div className="oPlayer">O's Score: {this.state.oWins}</div>
        <div className="winner">{this.state.winner}</div>
        <button className="nextRound" onClick={this.nextRound}>Continue</button>
        <Grid setWinner={this.setWinner} ref={ref => (this.child = ref)}/>
        <button className="resetGame" onClick={this.resetGame}>Reset</button>
      </div>
    );
  }
}

export default App;
