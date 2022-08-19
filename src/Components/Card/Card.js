import React from 'react'
import classes from './Card.module.css'

const Card = ({ children, width }) => {
  return (
    <div style={{ width: width }} className={classes.card}>
      {children}
    </div>
  )
}

export default Card
