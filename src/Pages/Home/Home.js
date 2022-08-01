import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes['app-body']}>
      <Sidebar />
    </div>
  )
}

export default Home
