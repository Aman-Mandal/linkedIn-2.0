import React from 'react'
import classes from './Sidebar.module.css'
import profilePic from '../../Assets/me.jpg'
import backgroundImg from '../../Assets/bg.webp'

const Sidebar = () => {
  const recentItem = topic =>
    // prettier-ignore
    <div className={classes['sidebar-recentItem']}>
      <span className={classes['sidebar-hash']}>#</span>
      <p>{topic}</p>

    </div>

  return (
    <div className={classes.sidebar}>
      <div className={classes['sidebar-top']}>
        <img className={classes.background} src={backgroundImg} />
        <img className={classes.avatar} src={profilePic} alt="me" />
        <h2>Aman Mandal</h2>
        <p>Frontend Developer 💻</p>
      </div>

      <div className={classes['sidebar-stats']}>
        <div className={classes['sidebar-stat']}>
          <p>Who's viewed your profile</p>
          <p className={classes['sidebar-number']}>459</p>
        </div>
        <div className={classes['sidebar-stat']}>
          <p>Impressions of your posts</p>
          <p className={classes['sidebar-number']}>1,567</p>
        </div>
      </div>

      <div className={classes['sidebar-bottom']}>
        <p>Recent</p>
        {recentItem('ReactJS')}
        {recentItem('Javascript')}
        {recentItem('webdevelopment')}
        {recentItem('softwaredevelopment')}
        {recentItem('design')}
      </div>
    </div>
  )
}

export default Sidebar
