import React, { Component } from 'react';
import Pokedex from './Pokedex';
import { pokemons } from './pokemons';
import './Pokegame.css';

shuffleArray(pokemons);
const playerOneDeck = pokemons.slice(0, 4);
const playerTwoDeck = pokemons.slice(4, 8);

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

function calcExp(array) {
  let sum = 0;
  array.forEach(el => (sum += el.base_experience));
  return sum;
}

function checkWinner() {
  if (calcExp(playerOneDeck) > calcExp(playerTwoDeck)) return 1;
  else return 2;
}

class Pokegame extends Component {
  render() {
    return (
      <div>
        <Pokedex
          array={playerOneDeck}
          totalExp={calcExp(playerOneDeck)}
          isWinner={checkWinner() === 1 ? true : false}
        />
        <Pokedex
          array={playerTwoDeck}
          totalExp={calcExp(playerTwoDeck)}
          isWinner={checkWinner() === 2 ? true : false}
        />
      </div>
    );
  }
}

export default Pokegame;
