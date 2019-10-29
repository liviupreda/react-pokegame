import React, { Component } from 'react';
import Pokecard from './Pokecard';
import { pokemons } from './pokemons';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className='Pokedex'>
        {pokemons.map(el => {
          return (
            <Pokecard
              id={el.id}
              name={el.name}
              type={el.type}
              exp={el.base_experience}
              imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`}
            />
          );
        })}
      </div>
    );
  }
}

export default Pokedex;
