import React from 'react'
import { p } from 'react-router-dom'
import classes from './Widget.module.css'

const Widget = () => {
  return (
    <div className={classes.widgets}>
      <div className={classes['widgets-top']}>
        <h2>LinkedIn News</h2>
        <ul>
          <li>
            <p>Uber rides auto of Zomato</p>
            <p>
              2d ago <span>5567 readers</span>
            </p>
          </li>
          <li>
            <p>Robinhood cuts staff by 90%</p>
            <p>
              2d ago <span>16667 readers</span>
            </p>
          </li>
          <li>
            <p>RBI hikes rates increased by 10%</p>
            <p>
              2d ago <span>5247 readers</span>
            </p>
          </li>
          <li>
            <p>Monkey pox india update</p>
            <p>
              2d ago <span>89867 readers</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Widget
