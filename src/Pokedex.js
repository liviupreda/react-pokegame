import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
import { pokemons } from './pokemons';

class Pokedex extends Component {
  render() {
    const index = 7;
    return (
      <div className='Pokedex'>
        <Pokecard
          id={pokemons[index].id}
          name={pokemons[index].name}
          type={pokemons[index].type}
          exp={pokemons[index].base_experience}
          imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons[index].id}.png`}
        />
      </div>
    );
  }
}

export default Pokedex;
