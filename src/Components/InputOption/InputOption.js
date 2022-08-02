import React from 'react'
import classes from './InputOption.module.css'

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className={classes.inputOption}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption
