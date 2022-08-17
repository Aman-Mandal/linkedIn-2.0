import React from 'react'
import classes from './ProfileModal.module.css'
import Avatar from '../Avatar/Avatar'
import Modal from '../Modal/Modal'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/user-slice'
import { auth } from '../../Firebase/firebase-config'

const ProfileModal = ({ onCloseModal }) => {
  const dispatch = useDispatch()

  const signOutHandler = () => {
    dispatch(userActions.logout())
    auth.signOut()
    onCloseModal()
  }

  return (
    <Modal onCloseModal={onCloseModal}>
      <div className={classes['profile-modal']}>
        <div className={classes['top-container']}>
          <Avatar height={50} width={50} borderRadius={50} />
          <div className={classes.profile}>
            <h2>Aman Mandal</h2>
            <p>Frontend Developer</p>
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
