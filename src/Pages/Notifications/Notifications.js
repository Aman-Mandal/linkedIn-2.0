import React from 'react'
import NotificationFeed from './MainFeed/NotificationFeed'
import classes from './Notification.module.css'
import NotificationSidebar from './Sidebar/NotificationSidebar'
import NotificationWidget from './Widget/NotificationWidget'

const Notifications = () => {
  return (
    <div className={classes.notification}>
      <NotificationSidebar />
      <NotificationFeed />
      <NotificationWidget />
    </div>
  )
}

export default Notifications
