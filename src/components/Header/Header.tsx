import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
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
      </nav>
    </header>
  )
}

export default Header