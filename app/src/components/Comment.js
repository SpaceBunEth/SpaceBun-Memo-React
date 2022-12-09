import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request'
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/auth.constants";

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
                topic: null,
                response_to: props.props.id
            }
        }
        let resp = await request(options)
                
    }



    let replyArr = []
    replyArr.push(        
    
        <div className="card">
        <div className="card-header">
            UserID: {state.currentUser.user_id}
        </div>
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
            <a  className="btn btn-primary" onClick={() => {
                makeComment() 
                dispatch({...state, postReply:false})
                
            
            }}>Reply to Thread</a>
        </div>
        </div>
    );

    return(
        <>
        { state.postReply == true ? replyArr: <></>}
        <div>{mapObj()}</div>
        </>
    );
}

export default Comment