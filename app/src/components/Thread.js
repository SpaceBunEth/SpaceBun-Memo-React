import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";

import Comment from './Comment';
import { API_URL } from "../services/auth.constants";

function Thread() {
  const [ state, dispatch ] = useGlobalState();

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

return (
    <>
      <h2>Thread</h2>
      <h3>{mainThread()}</h3>
      <Comment props={state.currentThread}></Comment>
      

    </>
  );
}

export default Thread;