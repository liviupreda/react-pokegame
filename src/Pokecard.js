import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { name, type, exp, imgSrc } = this.props;
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-name'>{name}</h1>
        <img src={imgSrc} alt='poke' />
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
      </div>
    );
  }
}

export default Pokecard;
