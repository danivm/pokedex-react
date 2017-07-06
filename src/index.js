import React from 'react'
import { render } from 'react-dom'
import HelloWorld from './HelloWorld'

const App = () => (
  <div className="container">
    <HelloWorld name="Dani"/>
  </div>
)

render(<App />, document.getElementById('root'))
