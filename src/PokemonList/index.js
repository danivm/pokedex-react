import React, { Component } from 'react'
import PokemonCard from '../PokemonCard'

class PokemonList extends Component {
  constructor(){
    super()
    this.state = {
      pokemons: [],
      loading: true
    }
  }

  componentWillMount(){
    fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return res
      })
      .then(res => { 
        this.setState({ 
          pokemons: res.results,
          loading: false
        }) 
      })
  }

  render() {
    const { pokemons } = this.state
    return(
      <div>
        {
          this.state.loading &&
          <p>Loading</p>
        }
        {
          !this.state.loading &&
          Object
            .keys(pokemons)
            .map(num => {
              console.log(num, pokemons[num]['name'])
              return(
                <PokemonCard 
                  key={num} 
                  pokemonId={num*1+1} 
                  name={pokemons[num]['name']}
                />
              )
            }
            )
        }
      </div>
    )
  }
}

export default PokemonList
