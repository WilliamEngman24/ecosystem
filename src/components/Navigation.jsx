import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Ecosystem</NavLink>
      <br />
      <NavLink to="/animals">Animals</NavLink>
      <br />
      <NavLink to="/about">About</NavLink>
      <br />
    </nav>
  )
}

export default Navigation