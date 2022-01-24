import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Message() {
  return (
      <div className="message-wrapper">
        <header>
            <nav>
                <Link to="/home"><FontAwesomeIcon icon={faChevronLeft} /></Link>
            </nav>
            <div className="header-message">
                <h1>Jeremy Monsieur</h1>
                <Link to={`/account/name`}>View profile</Link>
            </div>
        </header>
        <main>
            <section className='message-content'>
                <ul>
                    <li className='message-box message-left'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum</p>
                        </div>
                    </li>
                    <li className='message-box message-right'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-right'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-left'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-right'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-right'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </li>
                    <li className='message-box message-left'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-right'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-right'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-left'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-right'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                    <li className='message-box message-right'>
                        <div className='message'>
                            <small>21h00</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ipsa a repellendus quae sed, quibusdam ab ipsum molestiae</p>
                        </div>
                    </li>
                </ul>
               
            </section>
            <section className="message-send">
                <input type="text" name="yourMessage" placeholder='Your message...' />
                <button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </section>
        </main>
      </div>
  )
}
