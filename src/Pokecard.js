import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { name, type, exp, imgSrc } = this.props;
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-name'>{name}</h1>
        <img src={imgSrc} alt={name} />
        <div className='Pokecard-details'>Type: {type}</div>
        <div className='Pokecard-details'>EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
