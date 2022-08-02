import React from 'react'
import classes from './Avatar.module.css'
import profilePic from '../../Assets/me.jpg'

const Avatar = () => {
  return (
    <div>
      <img className={classes.avatar} src={profilePic} alt="me" />
    </div>
  )
}

export default Avatar
