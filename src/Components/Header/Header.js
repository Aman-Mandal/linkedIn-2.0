import classes from './Header.module.css'
import { FaSearch, FaHome, FaBriefcase, FaUsers, FaBell } from 'react-icons/fa'
import logo from '../../Assets/linkedin.png'
import { NavLink } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const Header = ({ onOpenModal }) => {
  const activeClass = {
    color: 'black',
  }

  const routes = [
    { path: '/feed', name: 'Home', icon: <FaHome /> },
    { path: '/mynetwork', name: 'My Network', icon: <FaUsers /> },
    { path: '/jobs', name: 'Jobs', icon: <FaBriefcase /> },
    { path: '/messaging', name: 'Messaging', icon: <FaHome /> },
    { path: '/notifications', name: 'Notifications', icon: <FaBell /> },
  ]

  return (
    <div className={classes.header}>
      <div className={classes['header-left']}>
        <img src={logo} alt="LinkedIn logo" />
        <div className={classes['header-search']}>
          <FaSearch />
          <input />
        </div>
      </div>

      <div className={classes['header-right']}>
        {routes.map(route => (
          <NavLink
            style={({ isActive }) => (isActive ? activeClass : undefined)}
            className={classes['header-option']}
            to={route.path}
            key={route.name}
          >
            <div className={classes['header-icon']}>{route.icon}</div>
            <p className={classes['header-text']}>{route.name}</p>
          </NavLink>
        ))}
        <div className={classes['header-avatar']} onClick={onOpenModal}>
          <Avatar borderRadius={50} height={37} width={37} />
          <p>Me</p>
        </div>
      </div>
    </div>
  )
}

export default Header
