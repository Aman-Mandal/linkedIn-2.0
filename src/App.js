import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Jobs from './Pages/Jobs/Jobs'
import Messaging from './Pages/Messaging/Messaging'
import Notifications from './Pages/Notifications/Notifications'
import MyNetwork from './Pages/MyNetwork/MyNetwork'
import classes from './App.module.css'
function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
