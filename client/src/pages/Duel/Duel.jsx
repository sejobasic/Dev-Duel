import React, { useState } from 'react'

// Data
import { duelUsers } from '../../services/userService'

// Components
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import Modal from '../../components/Modal/Modal'
import Winner from '../../components/Winner/Winner'

// Styling
import './Duel.css'

function Duel({ modal, setModal, loader, setLoader }) {
  const [username1, setUsername1] = useState('')
  const [username2, setUsername2] = useState('')
  const [userData, setUserData] = useState([])
  const [clicked, setClicked] = useState(false)

  async function handleDuel(e) {
    e.preventDefault()
    setUserData([])
    setClicked(false)
    setLoader(true)
    if (username1.length > 1 && username2.length > 1) {
      setUserData(await duelUsers(username1, username2))
      setModal(false)
      setLoader(false)
      setClicked(true)
    } else {
      setLoader(false)
      setModal(true)
      setClicked(false)
    }
  }

  const renderCard = userData.map((user) => {
    return <Card key={user.name} userData={user} />
  })

  return (
    <section className='duel-section'>
      <div className="form-wrapper">
      <div className='duel-container'>
        <input
          type='text'
          name='username'
          placeholder='Enter Username'
          value={username1}
          onChange={(e) => setUsername1(e.target.value)}
        />
        <h3>VS</h3>
        <input
          type='text'
          name='username'
          placeholder='Enter Username'
          value={username2}
          onChange={(e) => setUsername2(e.target.value)}
        />
      </div>
      <button onClick={handleDuel}>Duel</button>
      </div>
      {clicked && <Winner user1={userData[0]} user2={userData[1]} />}
      <div className='duel-cards'>{renderCard}</div>
      {loader && <Loader />}
      {modal && (
        <Modal modalMsg={'Must Provide Two Usernames'} setModal={setModal} />
      )}
    </section>
  )
}

export default Duel
