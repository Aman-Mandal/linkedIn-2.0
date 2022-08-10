import React, { useState } from 'react'
import classes from './Login.module.css'
import logo from '../../Assets/linkedin.png'
import google from '../../Assets/google.png'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/user-slice'
import Card from '../Card/Card'
import Signup from '../Signup/Signup'

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)

  const dispatch = useDispatch()

  const loginHandler = event => {
    event.preventDefault()
    dispatch(userActions.login())
  }

  const signupHandler = () => {
    setIsSignup(true)
  }

  return (
    <div className={classes.login}>
      <div className={classes.header}>
        <h2>Linked</h2>
        <img src={logo} className={classes.logo} />
      </div>

      <div className={classes['login-form']}>
        {isSignup ? (
          <Signup />
        ) : (
          <div>
            <Card>
              <h2 className={classes.heading}>Sign in</h2>
              <p className={classes.subheading}>
                Stay updated on your professional world
              </p>

              <form className={classes.form}>
                <input
                  className={classes.email}
                  type="email"
                  placeholder="Email"
                />
                <input
                  className={classes.password}
                  type="password"
                  placeholder="Password"
                />

                <p>Forgot Password ?</p>

                <button
                  className={classes['sign-in']}
                  type="submit"
                  onClick={loginHandler}
                >
                  Sign In
                </button>
                <div className={classes['horizontal-line']}>or</div>

                <button className={classes['google-signin']}>
                  <img src={google} className={classes['google-logo']} />
                  <p>Sign in with Google</p>
                </button>
              </form>
            </Card>

            <div className={classes['join-now']}>
              <p>New to LinkedIn?</p>
              <span onClick={signupHandler}>Join now</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
