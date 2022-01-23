import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

  const handleLogout = () => {
    console.log("lougout");
  }

  return (
    <nav>
      <ul>
        <li className="nav-active"><Link to="/home"><FontAwesomeIcon className='nav-icon' icon={faHome} /></Link></li>
        <li><Link to="/account/0"><FontAwesomeIcon className='nav-icon' icon={faUser} /></Link></li>
        <li onClick={() => handleLogout()}><Link to="/"><FontAwesomeIcon className='nav-icon' icon={faSignOutAlt} /></Link></li>
      </ul>
    </nav>
  )
}
