import React from 'react'
import classes from './ProfileModal.module.css'
import Modal from '../Modal/Modal'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/user-slice'
import { auth } from '../../Firebase/firebase-config'
import { Avatar } from '@mui/material'

const ProfileModal = ({ onCloseModal }) => {
  const dispatch = useDispatch()

  const user = auth.currentUser

  const signOutHandler = () => {
    dispatch(userActions.logout())
    auth.signOut()
    onCloseModal()
  }

  return (
    <Modal onCloseModal={onCloseModal}>
      <div className={classes['profile-modal']}>
        <div className={classes['top-container']}>
          <Avatar src={user.photoURL} sx={{ height: 60, width: 60 }}>
            {user.email[0]}
          </Avatar>

          <div className={classes.profile}>
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <button className={classes['view-profile']}>View Profile</button>
        <div className={classes['mid-container']}>
          <h2>Account</h2>
          <h4>Try premium free</h4>
          <p>Settings &amp; Privacy</p>
          <p>Help</p>
          <p>Language</p>
        </div>
        <div className={classes['bottom-container']}>
          <h2>Manage</h2>
          <p>Post &amp; Activity</p>
          <p>Job Posting Account</p>
        </div>
        <div onClick={signOutHandler} className={classes.signout}>
          Signout
        </div>
      </div>
    </Modal>
  )
}

export default ProfileModal
