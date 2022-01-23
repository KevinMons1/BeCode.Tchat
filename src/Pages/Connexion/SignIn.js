import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../Assets/Images/logo.png"
import Auth from "../../Auth"

export default function SignIn() {

  const navigate = useNavigate()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [alertMessage, setAlertMessage] = useState("")
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    hideError()

    const { email, password } = data

    if (email !== "") {
      if (password !== "") {
        navigate("/home")
      } else displayError("Your password is empty.", passwordRef)
    } else displayError("Your email is empty.", emailRef)
  }

  const displayError = (message, value) => {
    setAlertMessage(message)
    value.current.classList.add("input-error")
  }

  const hideError = () => {
    setAlertMessage("")
    emailRef.current.classList.remove("input-error")
    passwordRef.current.classList.remove("input-error")
  }

  return (
    <div className="connexion-wrapper">
      <header>
        <img src={Logo} alt="Logo" />
      </header>

      <main>
        <h1>Login</h1>
        
        <form onSubmit={e => handleSubmit(e)}>
          {alertMessage !== "" ? <p className="alert">{alertMessage}</p> : null}
          <input ref={emailRef} onChange={e => setData({...data, email: e.target.value})} type="email" name="email" placeholder='Mail adress'/>
          <input ref={passwordRef} onChange={e => setData({...data, password: e.target.value})} type="password" name="password" placeholder='Password'/>
          <button type="submit">Sign In</button>
        </form>
        <Link to="/signup">Register</Link>
      </main>
    </div>
  )
}
