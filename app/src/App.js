import './App.css';
import { Outlet } from "react-router-dom";
import { GlobalProvider, useGlobalState } from './context/GlobalState';
import NavBar from './components/NavBar';

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import Profile from './components/user/Profile';
import UserProfile from './components/UserProfile';
import Search from './components/Search';
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import Login from "./components/user/Login";
import Register from "./components/user/Register";


function App() {
  console.log('APP.js CONSOLE.LOG')
  const [ state, dispatch ] = useGlobalState();
  

  useEffect(()=>{
    
  },[state.currentUser])

  let navigate = useNavigate();

  function logout(){
    AuthService.logout();
    navigate('timeline');
    window.location.reload();
  }

  return (
    <GlobalProvider>
      {/* <div className="nav-flex-container-style">
      <h2 className="text-gray text-center ">SpaceBun Memo</h2>
      </div> */}
      <NavBar />

      {/* left hand panel for user profile */}
     
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header mybg1 text-white">
          <h5 className="offcanvas-title " id="offcanvasScrollingLabel">{state.currentUser == null ? <>Please Login</> : <>Currently Logged In</>}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body mybg2" >
        {state.currentUser == null ? 
        
        <><h4>Please Login</h4> <Login></Login><h4>Or Register</h4><Register></Register> </>
        
        : <>
            <div className="text-center"><img id="logo-img" src="./spacebunweb3_animation_background.gif" alt="spacebun dance gif"/></div>
                <Profile></Profile>

            <div className="row text-center">
              <div className="col-6">
                 <Link to="/profile"><button className="btn btn-outline-secondary nav-button m-1"><b>Profile</b></button></Link>
              </div>
                
                <div className="col-6">
                    <Link onClick={logout}><button className="btn btn-outline-secondary nav-button m-1"><b>LogOut</b></button></Link>
                </div>
            </div>
        </>}

        </div>
      </div>



      {/*  Right hand panel for searching and viewing other user's profile */}
   
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" data-bs-backdrop="true" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header mybg1 text-white">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Search for Users</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body mybg2">
      
          {state.currentUser == null ? <>Please Login First</> : <Search></Search>}
        </div>
      </div>


      <Outlet />
    </GlobalProvider>
  );
}

export default App;