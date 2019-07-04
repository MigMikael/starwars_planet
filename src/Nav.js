import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    const navSytle = {
      color: "white"
    }

    return (
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link style={navSytle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navSytle} to="/planet">
            <li>Planet</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav