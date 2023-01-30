import React from 'react'

// Assets
import spinner from '../../assets/spinner.svg'

// Styling
import './Loader.css'

function Loader() {
  return (
    <div className='loader'>
      <img src={spinner} alt='loading spinner' />
    </div>
  )
}

export default Loader