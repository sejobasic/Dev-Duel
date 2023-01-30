import React from 'react'
import { NavLink } from 'react-router-dom'

// Styling
import './Home.css'

function Home() {
  return (
    <main className='home-container'>
      <h1 className='title'>
        Welcome to <span>Dev</span>
        <span>Duel</span>
      </h1>
      <div className='btn-wrapper'>
        <div className='box'>
          <NavLink exact to='/inspect'>
            <button>Inspect</button>
          </NavLink>
          <p>Look up a fellow dev's Github info.</p>
        </div>
        <div className='box'>
          <NavLink exact to='/duel'>
            <button>Duel</button>
          </NavLink>
          <p>Pick two dev's to go head to head.</p>
        </div>
      </div>
    </main>
  )
}

export default Home
