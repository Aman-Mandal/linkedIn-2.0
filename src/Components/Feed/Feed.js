import React from 'react'
import classes from './Feed.module.css'

import FeedInput from '../FeedInput/FeedInput'



const Feed = () => {
  return (
    <div className={classes.feed}>
      <FeedInput />
    </div>
  )
}

export default Feed
