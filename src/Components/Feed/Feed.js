import React, { useEffect, useState } from 'react'
import classes from './Feed.module.css'
import FeedInput from '../FeedInput/FeedInput'
import Post from '../Post/Post'
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../../Firebase/firebase-config'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  const collectionRef = collection(db, 'posts')

  useEffect(() => {
    onSnapshot(collectionRef, snap => {
      setPosts(
        snap.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    })
  })

  const formSubmitHandler = async event => {
    event.preventDefault()
    await addDoc(collectionRef, {
      name: 'Aman K',
      description: 'TEST',
      message: input,
      timestamp: serverTimestamp(),
    })
    setInput('')
  }

  const inputHandler = event => {
    setInput(event.target.value)
  }

  return (
    <div className={classes.feed}>
      <FeedInput
        formSubmitHandler={formSubmitHandler}
        inputHandler={inputHandler}
      />
      {posts.map(({ id, data: { name, description, message, photoURL } }) => (
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
