import React, { Component } from 'react'
import PokemonCard from '../PokemonCard'

class PokemonList extends Component {
  state = {
    pokemons: [],
    loading: true,
    filteredName: ''
  }

  componentWillMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(res => { 
        this.setState({ 
          pokemons: res.results,
          loading: false
        }) 
      })
  }

  handleChange = (e) => {
    const input = e.target.value
    this.setState({ filteredName: input })
  }

  filterNames = (pokemonId) => {
    const { pokemons, filteredName } = this.state
    if (filteredName==='') {
      return true
    } else if (pokemons[pokemonId].name.includes(filteredName)) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { pokemons, filterName } = this.state
    return(
      <div>
        <br/>
          <input
            className="form-control"
            value={filterName}
            onChange={this.handleChange}
          />
        <br/>
        {
          this.state.loading &&
          <p>Loading</p>
        }
        {
          !this.state.loading &&
          Object
            .keys(pokemons)
            .filter(this.filterNames)
            .map(num => {
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
