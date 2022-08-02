import React from 'react'
import classes from './Feed.module.css'
import Avatar from '../Avatar/Avatar'
import InputOption from '../InputOption/InputOption'
import { FaImage, FaVideo, FaBriefcase, FaNewspaper } from 'react-icons/fa'

const inputOptions = [
  { icon: <FaImage />, title: 'Photo', color: '#82B9F1' },
  { icon: <FaVideo />, title: 'Video', color: '#5F9B41' },
  { icon: <FaBriefcase />, title: 'Job', color: '#A872E8' },
  { icon: <FaNewspaper />, title: 'Article', color: '#E16745' },
]

const Feed = () => {
  const formSubmitHandler = event => {
    event.preventDefault()
  }

  return (
    <div className={classes.feed}>
      <div className={classes['feed-inputContainer']}>
        <div className={classes['feed-input']}>
          <Avatar />
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
    </div>
  )
}

export default Feed
