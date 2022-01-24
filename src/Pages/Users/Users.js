import React from 'react';
import { useNavigate } from 'react-router';
import Header from "../../Components/Header/Header"
import Nav from "../../Components/Nav/Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Users() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/message/name`)
  }

  return  (
    <div className="page-wrapper home-wrapper">
    <Header />
    <main>
      <div className="home-top">
        <h2>Find new friend</h2>
        <div className="home-search">
          <FontAwesomeIcon className='nav-icon' icon={faSearch} />
          <input type="text" placeholder='Find a new friend...'/>
        </div>
        <div className="home-new-friend">
          <Link to="/">Threads of discussion</Link>
        </div>
      </div>
      <section>
        <ul>
          <li className='users-card'>
            <h4>Jeremy Monsieur</h4>
            <button onClick={() => handleClick()}>Send a message</button>
          </li>
        </ul>
      </section>
    </main>
    <Nav />
  </div>
  )
}
