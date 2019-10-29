import React, { Component } from 'react';
import Pokecard from './Pokecard';
import { pokemons } from './pokemons';
import './Pokedex.css';

function padId(id) {
  if (id < 10) return '00' + id;
  else if (id < 100) return '0' + id;
  else return id;
}

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

class Pokedex extends Component {
  render() {
    shuffleArray(pokemons);
    let expCounter = 0;
    const { totalExp } = this.props;
    return (
      <div className='Pokedex'>
        {pokemons.slice(0, 4).map((el, i) => {
          expCounter += el.base_experience;
          return (
            <div key={i}>
              <Pokecard
                id={el.id}
                name={el.name}
                type={el.type}
                exp={el.base_experience}
                imgSrc={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(
                  el.id
                )}.png`}
              />
            </div>
          );
        })}
        <p>Total Experience: {expCounter}</p>
      </div>
    );
  }
}

export default Pokedex;
