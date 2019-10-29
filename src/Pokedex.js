import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function padId(id) {
  if (id < 10) return '00' + id;
  else if (id < 100) return '0' + id;
  else return id;
}

class Pokedex extends Component {
  render() {
    const { array, totalExp } = this.props;
    return (
      <div className='Pokedex'>
        {array.map((el, i) => {
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
        <p>Total Experience: {totalExp}</p>
      </div>
    );
  }
}

export default Pokedex;
