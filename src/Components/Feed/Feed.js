import React from 'react'
import classes from './Feed.module.css'
import FeedInput from '../FeedInput/FeedInput'
import Post from '../Post/Post'

const Feed = () => {
  return (
    <div className={classes.feed}>
      <FeedInput />
      <Post
        name="Aman Mandal"
        description="Developer"
        message="Building a community here :)"
      />
    </div>
  )
}

export default Feed
