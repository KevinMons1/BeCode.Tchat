import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../Assets/Images/logo.png"

export default function SignUp() {

  const navigate = useNavigate()
  const lastNameRef = useRef(null)
  const firstNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)
  const [alertMessage, setAlertMessage] = useState("")
  const [data, setData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: ""
  })
  
  const handleSubmit = e => {
    e.preventDefault()
    hideError()

    const { firstName, lastName, email, password } = data
    const specialChars = /[^a-zA-Z0-9]/;

    if (firstName !== "") {
      if (!specialChars.test(firstName)) {
        if (lastName !== "") {
          if (!specialChars.test(lastName)) {
            if (email !== "") {
              if (password !== "") {
                if (password.length >= 6) {
                  if (confirmPasswordRef.current.value === data.password) {
                    navigate("/")
                  } else displayError("Passwords not match.", confirmPasswordRef)
                } else displayError("Your password must be at least 6 characters long.", passwordRef)
              } else displayError("Password is empty.", passwordRef)
            } else displayError("Mail adress is empty.", emailRef)
          } else displayError("Not use special characters", lastNameRef)
        } else displayError("Last name is empty.", lastNameRef)
      } else displayError("Not use special characters", firstNameRef)
    } else displayError("First name is empty.", firstNameRef)
  }

  const confirmPassword = (value) => {
    if (value !== data.password) displayError("Passwords not match.", confirmPasswordRef)
    else hideError()
  }
  
  const displayError = (message, value) => {
    setAlertMessage(message)
    value.current.classList.add("input-error")
  }

  const hideError = () => {
    setAlertMessage("")
    firstNameRef.current.classList.remove("input-error")
    lastNameRef.current.classList.remove("input-error")
    emailRef.current.classList.remove("input-error")
    passwordRef.current.classList.remove("input-error")
    confirmPasswordRef.current.classList.remove("input-error")
  }

  return (
    <div className="connexion-wrapper">
      <header>
        <img src={Logo} alt="Logo" />
      </header>

      <main>
        <h1>Register</h1>
        
        <form onSubmit={e => handleSubmit(e)}>
          {alertMessage !== "" ? <p className="alert">{alertMessage}</p> : null}
          <input ref={firstNameRef} onChange={e => setData({...data, firstName: e.target.value})} type="text" name="firstName" placeholder='First name'/>
          <input ref={lastNameRef} onChange={e => setData({...data, lastName: e.target.value})} type="text" name="lastName" placeholder='Last Name'/>
          <input ref={emailRef} onChange={e => setData({...data, email: e.target.value})} type="email" name="email" placeholder='Mail adress'/>
          <input ref={passwordRef} onChange={e => setData({...data, password: e.target.value})} type="password" name="password" placeholder='Password'/>
          <input ref={confirmPasswordRef} onChange={e => confirmPassword(e.target.value)} type="password" name="confirmPassword" placeholder='Confirm Password'/>
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/">Login</Link>
      </main>
    </div>
  )
}
