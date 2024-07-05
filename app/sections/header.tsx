'use client'
import React, { useState } from 'react'
import Navbar from '../components/navbar';
const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const toggleTheme = (prev: string) => {
    if(prev === "light") {
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }
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
          <img src={theme === "light" ? "/images/mode-light.svg" : "/images/dark-theme.svg"} onClick={() => toggleTheme(theme)}/>
        </span>
      </div>

    </div>
  )
}

export default Header;