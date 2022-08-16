import React from 'react'
import classes from './NotificationItem.module.css'
import { BsThreeDots, BsDot } from 'react-icons/bs'

const NotificationItem = ({ img, content, time, reaction, comment }) => {
  return (
    <div className={classes['notification-item']}>
      <div className={classes['top-container']}>
        <img src={img} />
        <div className={classes.content}>
          <p>{content}</p>
          <div className={classes.reaction}>
            <p>{reaction}</p>
            <p>
              <span>
                {reaction && <BsDot />}
              </span>
              {comment}
            </p>
          </div>
        </div>
        <div className={classes.time}>
          <p>{time}</p>
          <BsThreeDots />
        </div>
      </div>
    </div>
  )
}

export default NotificationItem
