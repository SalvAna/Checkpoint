import React from 'react';

const Pokemon = ({pokemon}) => (
  <div className="Pokemon">
  <h1>{pokemon.name}</h1>
    <img src={pokemon.imageUrl}/>
  </div>
);


export default Pokemon;
