import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const pokePicsLink =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function padId(id) {
  if (id < 10) return '00' + id;
  else if (id < 100) return '0' + id;
  else return id;
}

class Pokedex extends Component {
  render() {
    const { array, totalExp, isWinner } = this.props;
    let gameResult;
    if (isWinner) {
      gameResult = <h1 className='Pokedex-winner'>You are the WINNER !!!</h1>;
    } else {
      gameResult = <h1 className='Pokedex-loser'>Better luck next time !!!</h1>;
    }
    return (
      <div className='Pokedex'>
        <p>Total Experience: {totalExp}</p>
        {gameResult}
        {array.map((el, i) => {
          return (
            <div key={i} className='Pokedex-card'>
              <Pokecard
                id={el.id}
                name={el.name}
                type={el.type}
                exp={el.base_experience}
                imgSrc={`${pokePicsLink}${padId(el.id)}.png`}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Pokedex;
