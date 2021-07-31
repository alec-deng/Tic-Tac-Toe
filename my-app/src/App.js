import React, { Component } from 'react';
import Grid from './Grid.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      winner: ""
    }
  }

  setWinner = (player) => {
    this.setState({
      winner: player
    });
  }

  render() {
    return (
      <div className="App">
        <Grid setWinner={this.setWinner}/>
      </div>
    );
  }
}

export default App;
