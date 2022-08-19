import React, { useState } from 'react'
import { FaImage, FaVideo, FaBriefcase } from 'react-icons/fa'
import { MdCalendarViewDay } from 'react-icons/md'
import classes from './FeedInput.module.css'
import { Avatar } from '@mui/material'
import { auth } from '../../Firebase/firebase-config'

const inputOptions = [
  { icon: <FaImage />, title: 'Photo', color: '#82B9F1' },
  { icon: <FaVideo />, title: 'Video', color: '#5F9B41' },
  { icon: <FaBriefcase />, title: 'Job', color: '#A872E8' },
  { icon: <MdCalendarViewDay />, title: 'Article', color: '#E16745' },
]

const FeedInput = props => {
  const [enteredData, setEnteredData] = useState('')

  const user = auth.currentUser

  const formSubmitHandler = event => {
    event.preventDefault()

    const postsData = {
      img: user.photoURL,
      name: user.displayName,
      description: user.email,
      message: enteredData,
    }
    props.onAddPost(postsData)
    setEnteredData('')
  }

  const inputChangeHandler = event => {
    setEnteredData(event.target.value)
  }
  return (
    <div className={classes['feed-inputContainer']}>
      <div className={classes['feed-input']}>
        <Avatar src={user?.photoURL} sx={{ height: 60, width: 60 }}>
          {user?.email[0]}
        </Avatar>
        <form onSubmit={formSubmitHandler}>
          <input
            value={enteredData}
            onChange={inputChangeHandler}
            type="text"
            placeholder="Start a post"
          />
        </form>
      </div>

      <div className={classes['feed-inputOptions']}>
        {inputOptions.map(option => (
          <div className={classes['option']} key={option.title}>
            <div
              style={{ color: option.color }}
              className={classes['option-icon']}
            >
              {option.icon}
            </div>
            <p>{option.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeedInput
