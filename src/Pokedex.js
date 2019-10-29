import React, { Component } from 'react';
import Pokecard from './Pokecard';
import { pokemons } from './pokemons';
import './Pokedex.css';

function padId(id) {
  if (id < 10) return '00' + id;
  else if (id < 100) return '0' + id;
  else return id;
}

class Pokedex extends Component {
  render() {
    return (
      <div className='Pokedex'>
        {pokemons.map(el => {
          return (
            <>
              <Pokecard
                id={el.id}
                name={el.name}
                type={el.type}
                exp={el.base_experience}
                imgSrc={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(
                  el.id
                )}.png`}
              />
            </>
          );
        })}
      </div>
    );
  }
}

export default Pokedex;
