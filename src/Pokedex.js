import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className='Pokedex'>
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
      </div>
    );
  }
}

export default Pokedex;
