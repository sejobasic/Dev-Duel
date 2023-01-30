import React, { useState } from 'react'

// Data
import { inspectUser } from '../../services/userService'

// Components
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'
import Loader from '../../components/Loader/Loader'

// Styling
import './Inspect.css'

function Inspect({ modal, setModal, loader, setLoader }) {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState([])

  async function handleUser(e) {
    e.preventDefault()
    setUserData([])
    setLoader(true)
    if (username.length > 1) {
      setUserData(await inspectUser(username))
      setModal(false)
      setLoader(false)
    } else {
      setLoader(false)
      setModal(true)
    }
  }


  return (
    <section className='inspect-section'>
      <div className='form-wrapper'>
      <input
        type='text'
        name='username'
        placeholder='Enter Username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleUser}>Inspect</button>
      </div>
      {modal && (
        <Modal modalMsg={'Must Provide a Username'} setModal={setModal} />
      )}
      <div className='card-wrapper'>
        {userData.username != null && <Card userData={userData} />}
        {loader && <Loader />}
      </div>
    </section>
  )
}

export default Inspect
