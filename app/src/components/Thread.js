import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";

import Comment from './Comment';
import { API_URL } from "../services/auth.constants";

import '../App.css';

function Thread() {
  const [ state, dispatch ] = useGlobalState();

const threadArray = []

function mainThread(){


  threadArray.push(        
    <div className="row gx-5 g-2">
      <div className="col-12">

        <div className="card text-center m-2">
          <div className="mybg2">
              <div className="card-header">
              Original Poster: 
              
              <Link to="/userprofile" onClick={() => {dispatch({...state, VisitUser : state.currentThread.author})}}>{state.currentThread.author.username}</Link>, 
              
              {/* {state.currentThread.topic == null ? 'No Topic':state.currentThread.topic.categories}, */}
               {state.currentThread.created}

              </div>
          </div>

          <div className="nav-flex-container-style">
            <div className="card-body">
              <h2 className="card-title">{state.currentThread.topic == null ? 'No Topic':state.currentThread.topic.categories}</h2>
              <p className="card-text">{state.currentThread.body}</p>
              
            </div>
          </div>

          <div className="mybg2">
              <div className="card-footer text-muted">
                {state.currentUser == null? <></>:           
                <button className="btn btn-outline-secondary nav-button" 
                onClick={()=>{
                        if(state.postReply == true){
                          dispatch({...state, postReply:false})
                        }else{
                          dispatch({...state, postReply:true})
                        }
                      }}><b>Reply</b></button>}
     
                  <br/>
              </div>
          </div>


        </div>
        
      </div>
    </div>
)



  return threadArray
  
}


return (


    <>
      <div className="container px-5">
        {state.currentThread == null? 
        <div className="text-center">
          <div className="nav-flex-container-style">
            <div className="col-12"><h1>404 Thread lost</h1></div>
            <br/>
            <div className="col-12">
            <Link to="/timeline"><button className="btn btn-outline-secondary nav-button"><b>Return</b></button></Link>
            </div>
            </div>
            </div>
        
          :<>
              <h3>{mainThread()}</h3>
             {state.currentUser == null?         <div className="text-center">
          <div className="nav-flex-container-style">
                <div className="col-12"><h3>Login To View Comments</h3></div>
                    <br/>
                    <div className="col-12">
                        <Link to="/login"><button className="btn btn-outline-secondary nav-button"><b>Login</b></button></Link>
                    </div>
                </div>
            </div>
            :<Comment></Comment>} 
          </>}
      </div>
    </>
  );
}

export default Thread;