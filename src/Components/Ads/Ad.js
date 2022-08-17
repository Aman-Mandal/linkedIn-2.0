import React from 'react'
import classes from './Ad.module.css'
import { BsThreeDots } from 'react-icons/bs'
import ScalerLogo from '../../Assets/scaler-logo.jpg'
import { auth } from '../../Firebase/firebase-config'
import { Avatar } from '@mui/material'

const Ad = () => {
  const user = auth.currentUser

  return (
    <div className={classes.ad}>
      <div className={classes.header}>
        <h2>Ad</h2>
        <BsThreeDots />
      </div>
      <div className={classes.content}>
        <p>Stay up to date with tech concepts &amp; relatable humor</p>
        <div className={classes['ad-imgs']}>
          <Avatar src={user?.photoURL} sx={{ height: 70, width: 70 }}>
            {user.email[0]}
          </Avatar>
          <img className={classes['ad-logo']} src={ScalerLogo} />
        </div>
        <h3>
          Upskill in your career by following <span>Scaler</span>
        </h3>
      </div>
      <div className={classes['btn-container']}>
        <button className={classes['follow-btn']}>Follow</button>
      </div>
    </div>
  )
}

export default Ad
