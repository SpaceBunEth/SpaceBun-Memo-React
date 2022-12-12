import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios"
import { API_URL } from "../../services/auth.constants";
import request from '../../services/api.request'
import '../../App.css';

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  console.log(state.currentUser)

  const userID = state.currentUser.user_id
  const USER_PROFILE = "users/"+ userID +"/"
  const userURL = API_URL + USER_PROFILE;

  let dataObj = {}
  const [postUser, setPostUser] = React.useState(null);

  // useEffect(() => {
  //   axios.get(userURL).then((response) => {
  //     dataObj = response.data
  //     setPostUser(dataObj)
  //   })
  //   .catch(function (error){
  //   })
  //   ;
  // }, []);

useEffect(() => {
  async function getUserProfile() {
    let options = {
      url: USER_PROFILE, 
      method: 'GET'
    } 
    let resp = await request(options) 
    dispatch({...state, mainUser:resp.data}) 
  }
  getUserProfile()
}, []);

console.log(state.mainUser)



  const htmlArray = []
  function mapObj(){
    htmlArray.push(
      <>
        <div className="card mb-3">
          {/* <img src="../1741329.png"  className="card-img-top" alt="..."/> */}
            <div className="nav-flex-container-style">
                <div className="card-body">
                    <p className="card-text"><small className="text-muted">UserID: {state.currentUser.user_id}</small></p>
                      
                      <h5 className="card-title">Username: {state.mainUser.username}</h5>
                      <p className="card-text">Bio: {state.mainUser.bio}</p>
                      <p className="card-text"><small className="text-muted">Joined {state.mainUser.date_joined}</small></p>
                </div>
            </div>
        </div>
        
      </>
    )


    return htmlArray
    
  }

  

  return (
    <div>
      <h1></h1>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12"> 
          <>{state.mainUser == null? <>Fetching user data</>: mapObj()}</>
          {/* <Link to="/edit-profile" props={state.currentUser.user_id}>Edit Profile</Link> */}
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Profile