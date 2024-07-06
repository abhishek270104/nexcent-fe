'use client'
import React from 'react'
import Navbar from '../components/navbar';
import { useTheme } from 'next-themes';
import { UseThemeProps } from 'next-themes/dist/types';

const Header = () => {
  const { resolvedTheme, theme, setTheme }: UseThemeProps = useTheme()
  const toggleTheme = (prev: string | undefined) => {
    if (prev === undefined) {
      setTheme("light")
    }
    if (prev === "light") {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }
  return (
    <header className='header'>
      <div className='logo'>
        <img src='/images/logo.svg' alt="logo" />
        <span className='logoText'>Nexcent</span>
      </div>
      <Navbar />
      <div className='signinButtons'>
        <button className='loginbutton'>Login</button>
        <button className='signupbutton'>Signup</button>
        <span className='theme'>
          <img src={resolvedTheme === "light" ? "/images/mode-light.svg" : "/images/dark-theme.svg"} onClick={() => toggleTheme(resolvedTheme)} />
        </span>
      </div>

    </header>
  )
}

export default Header;