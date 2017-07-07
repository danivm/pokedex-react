import React from 'react'

const PokemonCard = (props) => (
  <div className="col-sm-4 col-md-3">
    <div className="thumbnail">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png` } />
      <div className="caption">
        <h3 className="text-center">{props.name}</h3>
      </div>
    </div>
  </div>
)

export default PokemonCard
