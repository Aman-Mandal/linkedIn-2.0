import React from 'react'
import classes from './Post.module.css'
import { FaRegThumbsUp, FaRegCommentDots, FaShare } from 'react-icons/fa'
import { BiSend } from 'react-icons/bi'
import { auth } from '../../Firebase/firebase-config'
import { Avatar } from '@mui/material'

const postIcons = [
  { name: 'Like', icon: <FaRegThumbsUp /> },
  { name: 'Comment', icon: <FaRegCommentDots /> },
  { name: 'Share', icon: <FaShare /> },
  { name: 'Send', icon: <BiSend /> },
]

const Post = ({ name, description, message, ImgUrl }) => {
  const user = auth.currentUser
  return (
    <div className={classes.post}>
      <div className={classes['post-header']}>
        <Avatar src={ImgUrl} className={classes.avatar}>
          {user.email[0]}
        </Avatar>
        <div className={classes['post-info']}>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className={classes['post-body']}>
        <p>{message}</p>
      </div>

      <div className={classes.line}></div>

      <div className={classes['post-buttons']}>
        {postIcons.map(button => (
          <div key={button.name} className={classes['post-btn']}>
            <div className={classes.icons}>{button.icon}</div>
            <p>{button.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
