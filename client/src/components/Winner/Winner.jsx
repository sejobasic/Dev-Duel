import React from 'react'
import Confetti from 'react-confetti'

// Styling
import './Winner.css'

function Winner({ user1, user2 }) {
  return (
    <div className='winner-container'>
      <Confetti width={3000} />
      {/* <img src='https://i.gifer.com/6SSp.gif' alt='' /> */}
      <span>🏆</span>
      {user1['public-repos'] > user2['public-repos'] ? (
        <h3>
          {user1.name} Wins with {user1['public-repos']} Repos
        </h3>
      ) : (
        <h3>
          {user2.name} Wins with {user2['public-repos']} Repos
        </h3>
      )}
    </div>
  )
}

export default Winner
