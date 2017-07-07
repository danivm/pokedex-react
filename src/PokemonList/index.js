import React, { Component } from 'react'

class PokemonList extends Component {
  state = {
    pokemons: []
  }

  handleClick = () => {
    fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(res => { 
        this.setState({ pokemons: res.results }) 
      })
      .catch(error => console.log(error))
  }

  render() {
    const { pokemons } = this.state
    return(
      <div>
        <button
          className="btn btn-danger" 
          onClick={this.handleClick}
        >Catch them all!</button>
        {
          Object
            .keys(pokemons)
            .map(num => <p>{pokemons[num]['name']}</p>)
        }
      </div>
    )
  }
}

export default PokemonList
