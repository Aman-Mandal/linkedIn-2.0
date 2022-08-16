import React from 'react'
import Ad from '../../../Components/Ads/Ad'
import classes from './NotificationWidget.module.css'

const NotificationWidget = () => {
  return (
    <div className={classes.widget}>
      <Ad />
    </div>
  )
}

export default NotificationWidget
