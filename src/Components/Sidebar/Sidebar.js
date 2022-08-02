import React from 'react'
import classes from './Sidebar.module.css'
import profilePic from '../../Assets/me.jpg'
import backgroundImg from '../../Assets/bg.webp'
import { MdGroups } from 'react-icons/md'
import { FaCalendar } from 'react-icons/fa'

const Sidebar = () => {
  const recentItem = topic =>
    // prettier-ignore
    <div className={classes['sidebar-recentItem']}>
      <span className={classes['sidebar-hash']}>#</span>
      <p>{topic}</p>
    </div>

  const recentGroups = groupName => (
    <div className={classes['sidebar-group']}>
      <span className={classes['sidebar-groupIcon']}>
        <MdGroups />
      </span>
      <p>{groupName}</p>
    </div>
  )

  const recentEvents = event => (
    <div className={classes['sidebar-recentEvent']}>
      <span className={classes['sidebar-eventIcon']}>
        <FaCalendar />
      </span>
      <p>{event}</p>
    </div>
  )

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

      <div className={classes['sidebar-groups']}>
        <p>Groups</p>
        {recentGroups('Software Developer')}
        {recentGroups('React Developers')}
        {recentGroups('Javascript Developers')}
        {recentGroups('FrontEnd Developers')}
      </div>

      <div className={classes['sidebar-events']}>
        <p>Events</p>
        {recentEvents('Tech Stories with Aman...')}
        {recentEvents('Machine Learning with Mosh')}
      </div>

      <div className={classes['sidebar-end']}>Discover More</div>
    </div>
  )
}

export default Sidebar
