import React, { useState } from 'react'
import { BsInfoSquareFill, BsDot } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Ad from '../Ads/Ad'
import classes from './Widget.module.css'

const Widget = () => {
  const [showMoreNews, setShowmoreNews] = useState(false)

  const newsWidgets = (title, date, readers) => (
    <div className={classes['widgets-article']}>
      <ul>
        <li>
          <h3 className={classes['widget-title']}>{title}</h3>
          <p className={classes['widget-subtitle']}>
            {date} <span>{readers}</span>
          </p>
        </li>
      </ul>
    </div>
  )

  const showMoreHandler = () => {
    setShowmoreNews(!showMoreNews)
  }

  return (
    <div className={classes.widgets}>
      <div className={classes['widgets-top']}>
        <div className={classes['widgets-header']}>
          <h2>LinkedIn News</h2>
          <BsInfoSquareFill />
        </div>

        {newsWidgets(
          'Big Bull Rakesh Jhunjhunwala dies',
          '7h ago',
          '41,567 readers'
        )}
        {newsWidgets('Uber rides auto of Zomato', '2d ago', '5,567 readers')}
        {newsWidgets('Robinhood cuts staff by 90%', '2d ago', '16,667 readers')}
        {newsWidgets(
          'RBI hikes rates increased by 10%',
          '2d ago',
          '5,247 readers'
        )}
        {newsWidgets('Monkey pox india update', '2d ago', '89,867 readers')}

        {showMoreNews && (
          <div className={classes['widgets-more']}>
            {newsWidgets(
              'What people look for in startups',
              '2d ago',
              '34,345 readers'
            )}
            {newsWidgets(
              'Big Hikes in IT set to fade out',
              '1d ago',
              '14,248 readers'
            )}
            {newsWidgets(
              'Higher fees, static pay at B-schools',
              '1d ago',
              '22,925 readers'
            )}
            {newsWidgets(
              'Big cheques for fintech startups',
              '2d ago',
              '28,889 readers'
            )}
          </div>
        )}

        <button className={classes['show-more-btn']} onClick={showMoreHandler}>
          {!showMoreNews ? 'Show More' : 'Show Less'}
          <span>
            <MdKeyboardArrowDown />
          </span>
        </button>
      </div>

      <Ad/>
    </div>
  )
}

export default Widget
