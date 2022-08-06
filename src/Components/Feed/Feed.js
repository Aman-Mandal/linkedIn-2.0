import React, { useEffect, useState } from 'react'
import classes from './Feed.module.css'
import FeedInput from '../FeedInput/FeedInput'
import Post from '../Post/Post'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  useEffect(() => {
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
    }
    fetchPosts()
  }, [])

  const inputHandler = event => {
    setInput(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
  }

  // const collectionRef = collection(db, 'posts')

  // useEffect(() => {
  //   onSnapshot(collectionRef, snap => {
  //     setPosts(
  //       snap.docs.map(doc => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   })
  // })

  // const formSubmitHandler = async event => {
  //   event.preventDefault()
  //   await addDoc(collectionRef, {
  //     name: 'Aman K',
  //     description: 'TEST',
  //     message: input,
  //     timestamp: serverTimestamp(),
  //   })
  //   setInput('')
  // }

  return (
    <div className={classes.feed}>
      <FeedInput
        formSubmitHandler={formSubmitHandler}
        inputHandler={inputHandler}
      />
      {posts.map(({ id, name, message, description }) => (
        <Post
          key={id}
          name={name}
          message={message}
          description={description}
        />
      ))}
    </div>
  )
}
export default Feed
