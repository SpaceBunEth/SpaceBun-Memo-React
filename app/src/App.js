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

function App() {
  console.log('APP.js CONSOLE.LOG')
  const [ state, dispatch ] = useGlobalState();
  
  useEffect(() => {
    
  })


  return (
    <GlobalProvider>
      <NavBar />

      {/* left hand panel for user profile */}
     
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        {state.currentUser == null ? <>Please Login</> : <Profile></Profile>}
        </div>
      </div>



      {/*  Right hand panel for searching and viewing other user's profile */}
   
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" data-bs-backdrop="false" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
      
          {state.currentUser == null ? <>Please Login</> : <Search></Search>}
        </div>
      </div>


      {/* <p>{mapObj()}</p> */}
      <Outlet />
    </GlobalProvider>
  );
}

export default App;