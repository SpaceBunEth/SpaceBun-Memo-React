import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

function Thread() {

const API_URL = "https://8000-spacebuneth-spacebunmem-rr566be32ph.ws-us77.gitpod.io/api/";
const TIMELINE_URL = "timeline/?response_to__isnull=True"
const userURL = API_URL + TIMELINE_URL;

let dataObj = {}
const [postUser, setPostUser] = React.useState(null);

useEffect(() => {
  axios.get(userURL).then((response) => {
    dataObj = response.data
    setPostUser(dataObj)
    console.log(dataObj)
  })
  .catch(function (error){
  })
  ;
}, []);

const htmlArray = []
function mapObj(){
  for (const key in postUser){
    console.log(key)
    console.log(postUser[key])
    for(const j in postUser[key]){
      console.log("LOOP j",j, postUser[key][j])
      htmlArray.push(
        <div key={key + j + ":" + postUser[key][j]}>
        <div>{j + ":" + postUser[key][j]}</div>
        </div>
      )
    }
    htmlArray.push(<Link to="/profile">Profile<br/></Link>)
  }
  return htmlArray
  
}
return (
    <>
      <h2>Timeline</h2>
      <p>{mapObj()}</p>
    </>
  );
}

export default Thread;