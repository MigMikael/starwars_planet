import React, { Component, useState, useEffect } from 'react'
import './App.css'

function PlanetDetail({ match }) {

  useEffect(() => {
    fetchPlanet();
  },[]);

  const [planet, setPlanet] = useState({})

  const fetchPlanet = async () => {
    const fetchItem = await fetch(`https://swapi.co/api/planets/${match.params.id}/`)
    const planet = await fetchItem.json()
    setPlanet(planet)
    console.log(planet);
  }

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Climate    : {planet.climate}</p>
      <p>Terrain    : {planet.terrain}</p>
      <p>Population : {planet.population}</p>
    </div>
  )
}

export default PlanetDetail