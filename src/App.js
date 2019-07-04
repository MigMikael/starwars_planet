import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'
import About from './About'
import Planet from './Planet'
import PlanetDetail from './PlanetDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/planet" exact component={Planet} />
            <Route path="/planet/:id" component={PlanetDetail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App