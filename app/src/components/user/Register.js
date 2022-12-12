import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import '../../App.css';

const Register = () => {
    let navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user)
     .then(() => {
        navigate('/login')
        window.location.reload();
     })
  }

  return (
    <div className="container px-5 text-center">
      <div className="row gx-5 g-2">
        <div class="card p-0">
          <div className="nav-flex-container-style text-center">
            <div class="card-body">
            <div className="c-form">
        <form onSubmit={handleRegister}>
          <div className="col-12 m-2">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => handleChange('username', e.target.value)}
              required
            />
          </div>
          <div className="col-12 m-2">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>
          <div className="col-12 m-2">
            <label htmlFor="pass">Password (8 characters minimum):</label>
            <input
              type="password"
              id="pass"
              name="password"
              minLength="8"
              required
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </div>
          <div className="col-12 m-2">
            <label htmlFor="passConf">Confirm Password:</label>
            <input
              type="password"
              id="passConf"
              name="password"
              minLength="8"
              required
              onChange={(e) => handleChange('passwordConf', e.target.value)} />
          </div>
          <div className="col-12 m-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="fname"
            
              required
              onChange={(e) => handleChange('firstName', e.target.value)} />
          </div>
          <div className="col-12 m-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lname"
              required
              onChange={(e) => handleChange('lastName', e.target.value)} />
          </div>

          <input
            className="btn btn-outline-secondary nav-button m-3"
            type="submit"
            value="Register"
            disabled={(
              user.password &&
              user.password.length >= 8 &&
              user.password === user.passwordConf &&
              user.firstName &&
              user.lastName &&
              user.email
            ) ? false : true}
          />
        </form>
        </div>


            </div>
          </div>
        </div>
      </div>
    </div>

    
  )

}

export default Register

{/* <div className="container px-5 text-center"></div>
<div className="row gx-5 g-2">
<div className="col-12 "> */}