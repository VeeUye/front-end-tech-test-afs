import React from 'react'

import Canvas from './components/Canvas'

import PropertyCard from './components/PropertyCard'

import './App.scss'

function App() {
  return <Canvas>{<PropertyCard />}</Canvas>
}

export default App
