import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function ModifyProfile({ changeModal }) {
  return (
      <aside className='modify-profile'>
          <div className="modify-profile-opacity"></div>
          <form className="modify-profile-content">
            <div className="modify-profile-close">
                <FontAwesomeIcon onClick={() => changeModal()} icon={faTimesCircle} />
            </div>
            <h3>Change my profile</h3>
            <input type="text" name="firstName" value='Monsieur' />
            <input type="text" name="lastName" value='Kévin' />
            <input type="date" name="birthday" value="2001-01-01" min={"2004-01-01"} max="2124-01-01" />
            <input type="email" name="email" value='kevin@gmail.com' />
            <input type="text" name="bio" value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias eum voluptatum nisi quam harum nihil placeat dolorum ipsum, non illo earum consequuntur quidem excepturi laborum iusto corporis, repudiandae nostrum.' />
            <button>Modify</button>
          </form>
      </aside>
  )
}
