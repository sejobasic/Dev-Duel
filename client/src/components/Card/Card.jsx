import React from 'react'

// Styling
import './Card.css'

function Card({ userData }) {
  return (
    <div className='card-container'>
      <div>
        <img className='avatar' src={userData.avatar_url} alt='user avatar' />
      </div>
      <div className='user-info'>
        <h2>{userData.name}</h2>
        <p>{userData.bio}</p>
        <p>{userData.location}</p>
        <ul>
          <li>
            {userData.followers} <strong>Followers</strong>
          </li>
          <li>
            {userData.following} <strong>Following</strong>
          </li>
          <li>
            {userData['public-repos']} <strong>Repos</strong>
          </li>
        </ul>
        <p>
          Favorite Language: <strong>{userData['favorite-language']}</strong>
        </p>
      </div>
    </div>
  )
}

export default Card
