import React from 'react';
import Logo from "./../../Assets/Images/logo.png"
import Background from "./../../Assets/Images/bg.jpg"

export default function Header() {
  return (
    <header className='header-app'>
      <div className='header-bg'>
        <img src={Background} alt="Background" />
      </div>
      <div className='header-content'>
        <img src={Logo} alt="Logo" />
        <h1>Hello, Kévin</h1>
      </div>
    </header>
  )
}
