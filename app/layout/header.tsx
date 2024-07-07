'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar';
import { useTheme } from 'next-themes';
import { UseThemeProps } from 'next-themes/dist/types';

const Header = () => {
  const { resolvedTheme, theme, setTheme }: UseThemeProps = useTheme()
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
    setTheme("light")
  }, []);
  const toggleTheme = (prev: string | undefined) => {
    if (prev === "light") {
      setTheme("dark")
      document.body.classList.add("dark")
    }
    else {
      setTheme("light")
      document.body.classList.remove("dark")
    }
  }
  return (
    <>
      {mounted ? <header className='header'>
        <div className='logo'>
          <img src={resolvedTheme == "light" ? '/images/logo.svg' : '/images/logo-white.svg'} alt="logo" />
          <span className='logoText'>Nexcent</span>
        </div>
        <Navbar />
        <div className='signinButtons'>
          <button className='loginbutton'>Login</button>
          <button className='signupbutton'>Signup</button>
          <span className='theme'>
            <img src={resolvedTheme == "light" ? "/images/mode-light.svg" : "/images/dark-theme.svg"} onClick={() => toggleTheme(resolvedTheme)} />
          </span>
        </div>

      </header> : null}
    </>
  )
}

export default Header;