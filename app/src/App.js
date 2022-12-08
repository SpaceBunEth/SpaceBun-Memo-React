import './App.css';
import { Outlet } from "react-router-dom";
import { GlobalProvider, useGlobalState } from './context/GlobalState';
import NavBar from './components/NavBar';

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

function App() {
  console.log('APP.js CONSOLE.LOG')



  return (
    <GlobalProvider>
      <NavBar />
      <h2>Home Page</h2>
      {/* <p>{mapObj()}</p> */}
      <Outlet />
    </GlobalProvider>
  );
}

export default App;