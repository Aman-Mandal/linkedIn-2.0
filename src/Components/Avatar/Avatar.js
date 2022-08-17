import React from 'react'
import userPic from '../../Assets/user.png'
const Avatar = ({ width, height, borderRadius, src = userPic }) => {
  return (
    <div>
      <img
        src={src}
        alt="me"
        style={{ width: width, height: height, borderRadius: borderRadius }}
      />
    </div>
  )
}

export default Avatar
