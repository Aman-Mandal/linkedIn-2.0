import React, { useState } from 'react'
import Card from '../Card/Card'
import Login from '../Login/Login'
import classes from './Signup.module.css'
import google from '../../Assets/google.png'

const Signup = () => {
  const [signIn, setSignIn] = useState(false)

  const signInHandler = () => {
    setSignIn(true)
  }

  return (
    <div className={classes.signup}>
      <Card>
        <h2 className={classes.heading}>Sign Up</h2>
        <p className={classes.subheading}>
          Make the most of your professional life
        </p>

        <form className={classes['signup-form']}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className={classes['signup-btn']}>Sign Up</button>
          <div className={classes['horizontal-line']}>or</div>
          <button className={classes['google-signin']}>
            <img src={google} className={classes['google-logo']} />
            <p>Sign in with Google</p>
          </button>
        </form>
      </Card>

      <div className={classes['login']}>
        <p>Already on LinkedIn?</p>
        <span className={signInHandler}>Sign In</span>
      </div>
    </div>
  )
}

export default Signup
