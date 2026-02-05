import './Navigation.css'

import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Ecosystem</NavLink>
      <NavLink to="/animals">Animals</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navigation