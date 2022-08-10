import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './Pages/Home/Home'
import Jobs from './Pages/Jobs/Jobs'
import Messaging from './Pages/Messaging/Messaging'
import Notifications from './Pages/Notifications/Notifications'
import MyNetwork from './Pages/MyNetwork/MyNetwork'
import classes from './App.module.css'
import Login from './Components/Login/Login'

function App() {
  const user = useSelector(state => state.user.userReducer)

  return (
    <div className={classes.app}>
      <Router>
        {!user && <Login />}
        {user && (
          <div>
            <Header />
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
