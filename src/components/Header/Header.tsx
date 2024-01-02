import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

const Header = () => {
  const { isLoggedIn,logout } = useAuth();
  return (
    <header className='header'>
      <nav className='header-nav'>
        <div>
          <Link to='/'>
            <h3>Home</h3>
          </Link>
        </div>
        <div>
          <Link to ='/about'>
            <h3>About</h3>
          </Link>
        </div>
        <div>
          <Link to ='/github'>
            <h3>Github</h3>
          </Link>
        </div>
        <div>
          
          {isLoggedIn ? (
            <>
            <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to='/login'>Login</Link>
          )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header