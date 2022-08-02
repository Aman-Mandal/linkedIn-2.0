import React from 'react'
import profilePic from '../../Assets/me.jpg'

const Avatar = ({ width, height, borderRadius }) => {
  return (
    <div>
      <img
        src={profilePic}
        alt="me"
        style={{ width: width, height: height, borderRadius: borderRadius }}
      />
    </div>
  )
}

export default Avatar
