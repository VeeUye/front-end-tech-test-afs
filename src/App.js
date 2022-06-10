import React from 'react'

import Canvas from './components/Canvas'

import PropertyList from './components/PropertyList'

import './App.scss'

function App(props) {
  const { properties } = props
  return (
    <Canvas>
      <>{<PropertyList properties={properties} />}</>
    </Canvas>
  )
}

export default App
