import React from 'react'
import Avatar from '../Avatar/Avatar'
import { FaImage, FaVideo, FaBriefcase } from 'react-icons/fa'
import { MdCalendarViewDay } from 'react-icons/md'
import classes from './FeedInput.module.css'

const inputOptions = [
  { icon: <FaImage />, title: 'Photo', color: '#82B9F1' },
  { icon: <FaVideo />, title: 'Video', color: '#5F9B41' },
  { icon: <FaBriefcase />, title: 'Job', color: '#A872E8' },
  { icon: <MdCalendarViewDay />, title: 'Article', color: '#E16745' },
]

const FeedInput = () => {
  const formSubmitHandler = event => {
    event.preventDefault()
  }

  return (
    <div className={classes['feed-inputContainer']}>
      <div className={classes['feed-input']}>
        <Avatar borderRadius={50} height={60} width={60} />
        <form onSubmit={formSubmitHandler}>
          <input type="text" placeholder="Start a post" />
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
