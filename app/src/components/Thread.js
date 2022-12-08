import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";

import Comment from './Comment';
import { API_URL } from "../services/auth.constants";

function Thread() {
  const [ state, dispatch ] = useGlobalState();

  console.log('reply state', state.postReply)


  


const TIMELINE_URL = "timeline/?response_to="
let threadID = state.currentThread.id
console.log('thread id',threadID)
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
  threadArray.push(<button onClick={()=>{
    if(state.postReply == true){
      dispatch({...state, postReply:false})
    }else{
      dispatch({...state, postReply:true})
    }
  }}>Reply</button>)
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
      { state.postReply == true ? <Comment props={state.currentThread}/> : <></> }
      <div>{mapObj()}</div>
      

    </>
  );
}

export default Thread;