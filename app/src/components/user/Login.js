import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";
import '../../App.css';

const Login = () => {
  
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");




  const handleLogin = (e) => {
    e.preventDefault();

    AuthService
      .login(username, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data
        })
        navigate('/profile')
        window.location.reload();
      });
  }

  return (

  <div className="container px-5">
    <div className="row gx-5 g-2">
      <div className="card p-0">
        <div className="nav-flex-container-style">
          <div className="card-body">

          <div className="c-form text-center">
              <form onSubmit={handleLogin}>
                <div className="col-12 m-2">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 m-2">
                  <label htmlFor="pass">Password:</label>
                  <input
                    type="password"
                    id="pass"
                    name="password"
                    minLength="8"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input
                  className="btn btn-outline-secondary nav-button"
                  type="submit"
                  value="Sign in"
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

export default Login

{/* <div className="container px-5 text-center"></div>
<div className="row gx-5 g-2">
<div className="col-12 "> */}