import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes['app-body']}>
      <Sidebar />
      <Feed />
    </div>
  )
}

export default Home
