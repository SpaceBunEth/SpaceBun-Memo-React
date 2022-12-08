import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios"
import { API_URL } from "../../services/auth.constants";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  const userID = state.currentUser.user_id
  const USER_PROFILE = "users/"+ userID +"/"
  const userURL = API_URL + USER_PROFILE;

  let dataObj = {}
  const [postUser, setPostUser] = React.useState(null);

  useEffect(() => {
    axios.get(userURL).then((response) => {
      dataObj = response.data
      setPostUser(dataObj)
    })
    .catch(function (error){
    })
    ;
  }, []);

  const htmlArray = []
  function mapObj(){
    for (const key in postUser){
      htmlArray.push(
        <div key={key + ":" + postUser[key]}>
        <div>{key + ":" + postUser[key]}</div>
        </div>
      )
    }
    return htmlArray
    
  }

  
 
  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>
      <h1>{mapObj()}</h1>
      <Link to="/edit-profile" props={state.currentUser.user_id}>Edit Profile</Link>
      

    </div>
  )
}

export default Profile