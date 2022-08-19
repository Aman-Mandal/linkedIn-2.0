import React, { useState } from 'react'
import classes from './Login.module.css'
import logo from '../../Assets/linkedin.png'
import google from '../../Assets/google.png'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/user-slice'
import Card from '../Card/Card'
import Signup from '../Signup/Signup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/firebase-config'

const Login = () => {
  const [onLogin, setOnLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const dispatch = useDispatch()

  const loginHandler = event => {
    event.preventDefault()

    if (!email.includes('@')) {
      return alert('Please enter a valid email')
    }
    if (pass.length === 0) {
      return alert('Enter password')
    }

    signInWithEmailAndPassword(auth, email, pass)
      .then(userAuth => {
        dispatch(
          userActions.login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        )
      })
      .catch(err => alert(err))
  }

  const signupHandler = () => {
    setOnLogin(false)
  }

  return (
    <div className={classes.login}>
      <div className={classes.header}>
        <h2>Linked</h2>
        <img src={logo} className={classes.logo} />
      </div>

      {onLogin && (
        <div className={classes['login-form']}>
          <div>
            <Card width={330}>
              <h2 className={classes.heading}>Sign in</h2>
              <p className={classes.subheading}>
                Stay updated on your professional world
              </p>

              <form className={classes.form}>
                <input
                  className={classes.email}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  className={classes.password}
                  type="password"
                  placeholder="Password"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
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
        </div>
      )}

      {!onLogin && <Signup />}
    </div>
  )
}

export default Login
