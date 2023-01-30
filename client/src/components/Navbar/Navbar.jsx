import { NavLink } from 'react-router-dom'

// Styling
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='navbar-container'>
        <h1 className='logo'>
          Dev<span>Duel</span>
        </h1>
        <NavLink
          className='link-item'
          exact
          to='/'
          activeStyle={{
            color: '#eebbc3',
            fontWeight: '800',
          }}
        >
          Home
        </NavLink>
        <NavLink
          className='link-item'
          exact
          to='/inspect'
          activeStyle={{
            color: '#eebbc3',
            fontWeight: '800',
          }}
        >
          Inspect
        </NavLink>
        <NavLink
          className='link-item'
          exact
          to='/duel'
          activeStyle={{
            color: '#eebbc3',
            fontWeight: '800',
          }}
        >
          Duel
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
