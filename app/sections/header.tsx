import React from 'react'
import Navbar from '../components/navbar';
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src='/images/logo.svg' alt="logo" />
        <span className='logoText'>Nexcent</span>
      </div>
      <Navbar />
      <div className='signinButtons'>
        <button className='loginbutton'>Login</button>
        <button className='signupbutton'>Signup</button>
        <span className='theme'>
          <img src='/images/dark-theme.svg' />
        </span>
      </div>

    </div>
  )
}

export default Header;