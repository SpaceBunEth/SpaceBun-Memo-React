import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";

function Thread() {
  const [ state, dispatch ] = useGlobalState();

const API_URL = "https://8000-spacebuneth-spacebunmem-rr566be32ph.ws-us77.gitpod.io/api/";
const TIMELINE_URL = "timeline/?response_to="
let threadID = state.currentThread.id
const userURL = API_URL + TIMELINE_URL + threadID;

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

const threadArray = []
function mainThread(){
  for (const key in state.currentThread){
 
      threadArray.push(
        <div key={key + ":" + state.currentThread[key]}>
        <div>{key + ":" + state.currentThread[key]}</div>
        </div>
      )
    
  }
  return threadArray
  
}



const htmlArray = []
function mapObj(){
  for (const key in postUser){
    for(const j in postUser[key]){
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
      <h2>Thread</h2>
      <h3>{mainThread()}</h3>
      <div>{mapObj()}</div>

    </>
  );
}

export default Thread;