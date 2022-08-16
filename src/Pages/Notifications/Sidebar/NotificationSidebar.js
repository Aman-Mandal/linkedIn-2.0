import React from 'react'
import classes from './NotificationSidebar.module.css'

const NotificationSidebar = () => {
  return (
    <div className={classes.sidebar}>
        <div className={classes['top-container']}>
            <h3>Notifications</h3>
            <p>You have new notifications</p>
        </div>
        <div className={classes['bottom-container']}>
            <p>Improve your notifications</p>
            <h3>View Settings</h3>
        </div>
    </div>
  )
}

export default NotificationSidebar