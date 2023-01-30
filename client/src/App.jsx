import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Data
import { inspectUser, duelUsers } from './services/userService'

// Components
import { Navbar } from './components'
import Landing from './components/Landing/Landing'

// Pages
import Home from './pages/Home/Home'
import Inspect from './pages/Inspect/Inspect'
import Duel from './pages/Duel/Duel'

// Styling
import './GlobalStyles.css'

function App() {
  const [modal, setModal] = useState(false)
  const [loader, setLoader] = useState(false)
  const [loading, setLoading] = useState(false)
  // Hook that runs after React has updated the DOM
  useEffect(() => {
    setLoading(true)
    inspectUser()
    duelUsers()
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <BrowserRouter>
      {loading ? (
        <Landing />
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/inspect'>
              <Inspect
                modal={modal}
                setModal={setModal}
                loader={loader}
                setLoader={setLoader}
              />
            </Route>
            <Route exact path='/duel'>
              <Duel
                modal={modal}
                setModal={setModal}
                loader={loader}
                setLoader={setLoader}
              />
            </Route>
          </Switch>
        </>
      )}
    </BrowserRouter>
  )
}

export default App
