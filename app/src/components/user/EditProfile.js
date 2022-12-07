import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios"

const EditProfile = () => {
return(
    <>
    <h1>Edit Profile</h1>
    <label htmlFor="body">DisplayName</label>
    <br/>
    <input type="text" id="body" name="body"></input>
    <br/>
    <label htmlFor="body">Bio</label>
    <br/>
    <input type="text" id="body" name="body"></input>
    <br/>
    <label htmlFor="body">PFP</label>
    <br/>
    <input type="text" id="body" name="body"></input>

    <Link to="/profile">Return/Submit to profile</Link>
    </>
)}
export default EditProfile
