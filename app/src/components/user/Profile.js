import React, { useState, useEffect } from "react"
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios"

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();
  console.log(state.currentUser.user_id)

  const API_URL = "https://8000-spacebuneth-spacebunmem-rr566be32ph.ws-us77.gitpod.io/api/";
  const userID = state.currentUser.user_id
  const USER_PROFILE = "users/"+ userID +"/"
  const userURL = API_URL + USER_PROFILE;

  let dataObj = {}
  

  useEffect(() => {
    axios.get(userURL).then((response) => {
      dataObj = response.data
      console.log(dataObj)
      mapObj()

      


    })
    .catch(function (error){
    console.log('ERROR: ', error)
    })
    ;
  }, []);

  const htmlArray = []
  function mapObj(){
    for (const key in dataObj){
      console.log(key,":",dataObj[key])
      htmlArray.push(
        <>
        <div>hello</div>
        </>
      )
      console.log(htmlArray)
      console.log(dataObj)
    }
    
    
  }

  
 
  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>
      <h1>{htmlArray}</h1>
    </div>
  )
}

export default Profile