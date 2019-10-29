import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  static defaultProps = {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    experience: 62
  };
  render() {
    const p = this.props;
    return (
      <div className='Pokecard'>
        <p className='Pokecard-title'>{p.name}</p>
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
          alt='poke'
        />
        <p>Type: {p.type}</p>
        <p>EXP: {p.experience}</p>
      </div>
    );
  }
}

export default Pokecard;
