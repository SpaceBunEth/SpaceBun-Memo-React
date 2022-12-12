import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request'
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/auth.constants";
import '../App.css';

function Comment(props){
    const [ state, dispatch ] = useGlobalState();
    const [body, setBody] = useState('');



    const TIMELINE_URL = "comments/?response_to="
    let threadID = state.currentThread.id
    const userURL = TIMELINE_URL + threadID;

    let dataObj = {}
    const [postUser, setPostUser] = React.useState(null);


    const htmlArray = []


    useEffect(() => {
        async function getComments(){
            let options = {
                url: userURL,
                method: 'GET',

            }
            let resp = await request(options)
            setPostUser(resp.data)
        }
        getComments()
    }, [state.postReply])


    
    function mapObj(){
    for (const key in postUser){
        htmlArray.push(        
            <div className="row gx-5 g-2">
              <div className="col-8">
    
                <div className="card text-center m-2">

                  <div className="mybg2">
                        <div className="card-header">
                        Comment Left By: 
                        
                        <Link to="/userprofile" onClick={() => {dispatch({...state, VisitUser : postUser[key].author})}}>{postUser[key].author.username}</Link>, 
                        
                            
            
                        </div>
                  </div>  


                    <div className="nav-flex-container-style">
                        <div className="card-body">
                            <p className="card-text">{postUser[key].body}</p>
                        </div>
                    </div>

                  <div className="mybg2">
                        <div className="card-footer text-muted p-0">
                            <p className="m-0"><small>Created: {postUser[key].created}</small></p>
                        </div>
                  </div>  


                </div>
                
              </div>
            </div>
        )
    }
    return htmlArray
    
    }

    async function makeComment() {
        let options = {
            url: `/createpost/`,
            method: 'POST',
            data: {
                body: body,
                status: "Reply",
                like: 0,
                dislike: 0,
                author: state.currentUser.user_id,
                topic: 6,
                response_to: state.currentThread.id
            }
        }
        let resp = await request(options)
                
    }




    let replyArr = []
    replyArr.push(        
    
        <div className="card">
         <div className='mybg2'> 
            <div className="card-header">
                UserID: {state.currentUser.user_id}
            </div>
        </div>  

        <div className="nav-flex-container-style">
            <div className="card-body">
                {/* <h5 className="card-title">{state.currentUser.}</h5> */}
                <label htmlFor="body">Reply:</label><br/>
                <input 
                    onChange={(e)=>{
                        setBody(e.target.value)
                    }}
                    type="text" 
                    id="body" 
                    name="body"/>
                
                <br/>
                <button  className="btn btn-outline-secondary nav-button p-2" onClick={() => {
                    makeComment() 
                    dispatch({...state, postReply:false})
                    
                
                }}><b>Submit</b></button>
            </div>
        </div>

        </div>
    );

    return(
        <>
        
        <div className="container px-5 text-center">
        { state.postReply == true ? replyArr: <></>}
        <div>{mapObj()}</div>
        </div>
        </>
    );
}

export default Comment