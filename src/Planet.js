import React, { Component, useState, useEffect } from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Planet() {

  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://swapi.co/api/planets/')
    const items = await data.json()
    console.log(items.results) 
    setItems(items.results) 
  }

  return (
    <div>
      { items.map(item => (
        <h1 key={item.name}>
          <Link to={`/planet/${item.url.split("/")[5]}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  )
}

export default Planet