import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = (props) => (
  <h3>Hello {props.name}</h3>
)

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
}

export default HelloWorld
