import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Messaging from './Pages/Messaging'
import Notifications from './Pages/Notifications'
import MyNetwork from './Pages/MyNetwork'

function App() {
  return (
    <div className="App">
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
