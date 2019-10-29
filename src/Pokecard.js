import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { name, type, exp, imgSrc } = this.props;
    return (
      <div className='Pokecard'>
        <div>
          <h1 className='Pokecard-title'>{name}</h1>
        </div>
        <img src={imgSrc} alt='poke' />
        <div>
          <p>Type: {type}</p>
          <p>EXP: {exp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
