import React from 'react'

import Canvas from './components/Canvas'
import Message from './components/Message'

import properties from './data/properties'
import './App.scss'

export default () => (
  <Canvas>
    <Message text={`Welcome to ${properties[0].address.city}`} />
  </Canvas>
)
