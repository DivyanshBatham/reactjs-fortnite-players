import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Player from './Player/Player';
import AddPlayer from './AddPlayer/AddPlayer';

class App extends Component {

  state = {
    players: [
      { name: 'Ninja', playstyle: 'Aggressive', subs: 17713798, key: 1, img: './ninja.jpg' },
      { name: 'Tfue', playstyle: 'Strategic', subs: 3501646, key: 2, img: './tfue.jpg' },
      { name: 'Daequan', playstyle: 'Enjoy', subs: 3540263, key: 3, img: './daequan.jpg' }
    ]
  }

  addPlayer = (newPlayer) => {
    console.log(newPlayer);
    newPlayer.key = this.state.players.length + 1;
    let currentPlayers = this.state.players;
    this.setState({
      players: [...currentPlayers, newPlayer]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Top Fortnite Players</h1>
        </header>
        <p className="App-intro">
          Here's a list of my favorite fortnite players.
        </p>

        <Player players={this.state.players} />

        <footer className="App-footer">
          <AddPlayer addPlayer={this.addPlayer} />
        </footer>

      </div>
    );
  }
}

export default App;
