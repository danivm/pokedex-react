import React from 'react'
import { render } from 'react-dom'
import PokemonList from './PokemonList'

const App = () => (
  <div className="container">
    <h1>Pokedex - React Edition</h1>
    <PokemonList />
  </div>
)

render(<App />, document.getElementById('root'))
