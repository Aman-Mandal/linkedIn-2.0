import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Card from '../Card/Card'
import classes from './Signup.module.css'
import google from '../../Assets/google.png'
import { auth } from '../../Firebase/firebase-config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { userActions } from '../../store/user-slice'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [email, setEmail] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const dispatch = useDispatch()

  const formSubmissionHandler = event => {
    event.preventDefault()

    if (!firstName) {
      return alert('Please enter first Name')
    }
    if (!lastName) {
      return alert('Please enter Last Name')
    }
    if (!email.includes('@')) {
      return alert('Enter a valid email')
    }
    if (newPass) {
      if (newPass.length < 6) {
        return alert('Password needs to 6 characters long')
      }
    }
    if (!newPass) {
      return alert('Please enter a valid password')
    }
    if (newPass !== confirmPass) {
      return alert('Both the passwords needs to be the same')
    }

    const fullName = `${firstName} ${lastName}`

    createUserWithEmailAndPassword(auth, email, confirmPass)
      .then(userAuth => {
        const user = userAuth.user
        updateProfile(user, {
          displayName: fullName,
          photoURL: profilePic,
        }).then(() =>
          dispatch(
            userActions.login({
              email: userAuth.user.email,
              photoURL: profilePic,
              uid: userAuth.user.uid,
              displayName: fullName,
            })
          )
        )
      })
      .catch(err => alert(err))
  }

  return (
    <div className={classes.signup}>
      <Card>
        <h2 className={classes.heading}>Sign Up</h2>
        <p className={classes.subheading}>
          Make the most of your professional life
        </p>
        <form className={classes['signup-form']}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Profile Pic (optional)"
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPass}
            onChange={e => setNewPass(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={e => setConfirmPass(e.target.value)}
          />
          <button
            className={classes['signup-btn']}
            type="submit"
            onClick={formSubmissionHandler}
          >
            Sign Up
          </button>
          <div className={classes['horizontal-line']}>or</div>
          <button className={classes['google-signin']}>
            <img src={google} className={classes['google-logo']} />
            <p>Sign Up with Google</p>
          </button>
        </form>
      </Card>
    </div>
  )
}

export default Signup
