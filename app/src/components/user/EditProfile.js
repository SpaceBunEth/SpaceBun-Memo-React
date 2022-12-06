import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios"

const EditProfile = () => {
return(
    <>
    <h1>Edit Profile</h1>
    <Link to="/profile">Return/Submit to profile</Link>
    </>
)}
export default EditProfile
