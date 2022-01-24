import React, { useState } from 'react';
import Header from "../../Components/Header/Header"
import Nav from "../../Components/Nav/Nav"
import ModifyProfil from './ModifyProfile';

export default function Account() {

  const [modal, setModal] = useState(false)

  const changeModal = () => {
    setModal(!modal)
  }

  return (
    <div className="page-wrapper account-wrapper">
        {modal ? <ModifyProfil changeModal={() => changeModal()} /> : null}
        <Header />
        <main>
            <h2>Kévin Monsieur</h2>
            <p>Born on 01/01/2001</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias eum voluptatum nisi quam harum nihil placeat dolorum ipsum, non illo earum consequuntur quidem excepturi laborum iusto corporis, repudiandae nostrum.</p>
            {/* <button className="account-btn">Send message</button> */}
            <button className="account-btn" onClick={() => changeModal()}>Modify</button>
        </main>
        <Nav />
    </div>
  )
}
