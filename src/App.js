import React from 'react'

import Canvas from './components/Canvas'

import PropertyCard from './components/PropertyCard'

import './App.scss'

function App(props) {
  const { properties } = props
  return (
    <Canvas>
      <>{<PropertyCard properties={properties} />}</>
    </Canvas>
  )
}

export default App
