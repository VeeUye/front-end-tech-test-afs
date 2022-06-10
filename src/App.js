import React from 'react'

import Canvas from './components/Canvas'

import PropertyCard from './components/PropertyCard'

import './App.scss'
import properties from './data/properties'

function App() {
  return <Canvas>{<PropertyCard properties={properties} />}</Canvas>
}

export default App
