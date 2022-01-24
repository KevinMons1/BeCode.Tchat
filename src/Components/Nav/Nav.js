import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

  const homeRef = useRef(null)
  const accountRef = useRef(null)
  const logoutRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes("account")) {
      accountRef.current.classList.add("nav-active")
      homeRef.current.classList.remove("nav-active")
    } else {
      homeRef.current.classList.add("nav-active")
      accountRef.current.classList.remove("nav-active")
    }
  }, [location])

  const handleLogout = () => {
    console.log("lougout");
  }

  return (
    <nav className='nav-app'>
      <ul>
        <li ref={homeRef}><Link to="/home"><FontAwesomeIcon className='nav-icon' icon={faHome} /></Link></li>
        <li ref={accountRef}><Link to="/account/0"><FontAwesomeIcon className='nav-icon' icon={faUser} /></Link></li>
        <li ref={logoutRef} onClick={() => handleLogout()}><Link to="/"><FontAwesomeIcon className='nav-icon' icon={faSignOutAlt} /></Link></li>
      </ul>
    </nav>
  )
}
