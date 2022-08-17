import React, { useEffect, useState } from 'react'
import classes from './Feed.module.css'
import FeedInput from '../FeedInput/FeedInput'
import Post from '../Post/Post'
import { auth } from '../../Firebase/firebase-config'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const user = auth.currentUser

  // Getting post
  useEffect(() => {
    setIsLoading(true)
    const fetchPosts = async () => {
      const response = await fetch(
        'https://linkedin-clone-c4620-default-rtdb.firebaseio.com/posts.json'
      )
      const data = await response.json()

      const loadedPosts = []
      for (const key in data) {
        loadedPosts.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          message: data[key].message,
        })
      }
      setPosts(loadedPosts)
      setIsLoading(false)
    }
    fetchPosts()
  }, [posts])

  // Adding post
  const addPostHandler = async post => {
    const response = await fetch(
      'https://linkedin-clone-c4620-default-rtdb.firebaseio.com/posts.json',
      {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className={classes.feed}>
      <FeedInput onAddPost={addPostHandler} />
      {posts
        .map(({ id, name, message, description }) => (
          <Post
            key={id}
            name={name}
            message={message}
            description={description}
          />
        ))
        .reverse()}
    </div>
  )
}
export default Feed
