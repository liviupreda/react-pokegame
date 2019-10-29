import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends Component {
  render() {
    return (
      <div>
        <Pokedex />
        <Pokedex />
      </div>
    );
  }
}

export default Pokegame;
