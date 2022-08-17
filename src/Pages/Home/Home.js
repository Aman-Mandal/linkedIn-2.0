import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widget from '../../Components/Widgets/Widget'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes['app-body']}>
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  )
}

export default Home
