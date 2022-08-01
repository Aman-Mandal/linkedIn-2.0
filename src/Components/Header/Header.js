import classes from './Header.module.css'
import { FaSearch, FaHome, FaBriefcase, FaUsers, FaBell } from 'react-icons/fa'
import logo from '../../Assets/linkedin.png'
import profilePic from '../../Assets/me.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
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
            className={classes['header-option']}
            to={route.path}
            key={route.name}
          >
            <div className={classes['header-icon']}>{route.icon}</div>
            <p className={classes['header-text']}>{route.name}</p>
          </NavLink>
        ))}
        <div className={classes['header-avatar']}>
          <img src={profilePic} alt="me" />
          <p>Me</p>
        </div>
      </div>
    </div>
  )
}

export default Header
