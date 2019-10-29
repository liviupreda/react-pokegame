import React, { Component } from 'react';
import Pokedex from './Pokedex';
import { pokemons } from './pokemons';
import './Pokegame.css';

function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Pokegame extends Component {
  render() {
    shuffleArray(pokemons);
    return (
      <div>
        <Pokedex array={pokemons.slice(0, 4)} />
        <Pokedex array={pokemons.slice(4, 8)} />
      </div>
    );
  }
}

export default Pokegame;
