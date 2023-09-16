import { Link } from 'react-router-dom'
import './navBar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="/abukiks.ico" alt="" />
        <span>abukiks</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>32</span>
        </div>
        <div className="user">
          <img src="https://i.pinimg.com/474x/d5/f5/fc/d5f5fca3d27ccd8e9437c564b5701286.jpg" alt="" />
          <span>John Carl</span>
        </div>
        <Link to='/login'>
        <img src="/settings.svg" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default NavBar