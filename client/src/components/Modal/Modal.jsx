import React from 'react'

// Styling
import './Modal.css'

function Modal({ setModal, modalMsg }) {
  return (
    <div className='modal-container'>
      <div className='modal'>
        <h2>{modalMsg}</h2>
        <button onClick={() => setModal(false)}>Close</button>
      </div>
    </div>
  )
}

export default Modal
