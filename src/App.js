import Header from './Components/Header/Header'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Home from './Pages/Home/Home'
import Jobs from './Pages/Jobs/Jobs'
import Messaging from './Pages/Messaging/Messaging'
import Notifications from './Pages/Notifications/Notifications'
import MyNetwork from './Pages/MyNetwork/MyNetwork'
import classes from './App.module.css'
import Login from './Components/Login/Login'
import ProfileModal from './Components/ProfileModal/ProfileModal'
import { auth } from './Firebase/firebase-config'
import { userActions } from './store/user-slice'

function App() {
  const user = useSelector(state => state.user.user)
  const [modalIsShown, setModalIsShown] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is LoggedIn
        dispatch(
          userActions.login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      } else {
        // User is LoggedOut
        dispatch(userActions.logout())
      }
    })
  })

  const openModalHandler = () => {
    setModalIsShown(!modalIsShown)
  }

  const hideModalHandler = () => {
    setModalIsShown(false)
  }

  return (
    <div className={classes.app}>
      {modalIsShown && <ProfileModal onCloseModal={hideModalHandler} />}
      <Router>
        {!user && <Login />}
        {user && (
          <div>
            <Header onOpenModal={openModalHandler} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feed" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/mynetwork" element={<MyNetwork />} />
            </Routes>
          </div>
        )}
      </Router>
    </div>
  )
}

export default App
