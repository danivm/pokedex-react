import React from 'react'
import { render } from 'react-dom'

const MyFirstComponent = () => (
  <h3>This is my first component</h3>
)

render(<MyFirstComponent />, document.getElementById('root'))
