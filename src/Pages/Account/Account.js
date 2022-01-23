import React from 'react';
import Header from "../../Components/Header/Header"
import Nav from "../../Components/Nav/Nav"

export default function Account() {
  return (
    <div className="page-wrapper account-wrapper">
        <Header />
        <main>
            <h2>Kévin Monsieur</h2>
            <p>Born on 01/01/2001</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias eum voluptatum nisi quam harum nihil placeat dolorum ipsum, non illo earum consequuntur quidem excepturi laborum iusto corporis, repudiandae nostrum.</p>
            <button className="account-btn">Add friend / Modify</button>
        </main>
        <Nav />
    </div>
  )
}
