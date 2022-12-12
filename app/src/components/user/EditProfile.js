import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios"

import request from '../../services/api.request'

const EditProfile = (props) => {

    const [display, setDisplay] = useState(null);
    const [bio, setBio] = useState(null);
    const [pfp, setPfp] = useState(null);

    console.log(display)
    console.log(bio)


    

    async function putUserInfo() {
        let options = {
            url: `/userupdate/4/`,
            method: 'PUT',
            data: {
                display: display,
                bio: bio,
                pfp: pfp,

            },
        }
        let resp = await request(options)
        console.log('YO',resp.data)
        // setTopic(resp.data)
        
    }


return(
    <>  
    <h1>Edit Profile</h1>
    <label htmlFor="body">DisplayName</label>
    <br/>
    <input                 
        onChange={(e)=>{
            setDisplay(e.target.value)
        }}
    type="text" id="body" name="body"></input>
    <br/>
    <label htmlFor="body">Bio</label>
    <br/>
    <input 
        onChange={(e)=>{
            setBio(e.target.value)
        }}    
    type="text" id="body" name="body"></input>
    <br/>
    {/* <label htmlFor="body">PFP</label>
    <br/>
    <input type="text" id="body" name="body"></input>
    <br/> */}
    <button onClick={putUserInfo}>Save</button>
    <Link to="/profile">Return to profile</Link>
    </>
)}
export default EditProfile
