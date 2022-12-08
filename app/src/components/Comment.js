import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request'
import { useNavigate } from "react-router-dom";


function Comment(props){
    const [ state, dispatch ] = useGlobalState();
    const [body, setBody] = useState('');


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

    console.log('comment test', state.currentUser)
    console.log('props.id',props.props.id)

    return(
        <>
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
        </>
    );
}

export default Comment