import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import React, { useState, useEffect } from "react";
import request from '../services/api.request'
import { useNavigate } from 'react-router-dom';
import '../App.css';


function Post() {
    const [body, setBody] = useState("");
    const [currentTopic, setCurrentTopic] = useState(1);
    const [state, dispatch ] = useGlobalState();
    const [topics, setTopic] = useState([]);
    const [topicName, setTopicName] = useState("Topic")

    let navigate = useNavigate();



    useEffect(() => {
        async function getTopics() {
            let options = {
                url: `/topics/`,
                method: 'GET'
            }
            let resp = await request(options)
            setTopic(resp.data)
            
        }
        getTopics()
    }, [])

    let topicArr = []

    for(const x of topics) {
        if (x.categories == 'Reply'){
        
        }else{
        topicArr.push(
            <li><a className="dropdown-item" onClick={() => {
                setCurrentTopic(x.id)
                setTopicName(x.categories)
            
            }} key={x.categories}>{x.categories}</a></li>
            )
        }
        
        
    }

    async function makePost() {
        let options = {
            url: `/createpost/`,
            method: 'POST',
            data: {
                body: body,
                status: "Uploaded",
                like: 0,
                dislike: 0,
                author: state.currentUser.user_id,
                topic: currentTopic,
                response_to: null 
            }
            
        }
        console.log('options',options)
        let resp = await request(options)
                
    }
            

    



    

    return(
        <>
            {/* <h1>Post</h1>




            <label htmlFor="body">Body:</label><br/>
            <input 
                onChange={(e)=>{
                    setBody(e.target.value)
                }}
                type="text" 
                id="body" 
                name="body"/>
            
            <br/>
 */}



        <div className="container px-5 text-center">
            <div className="row gx-5 g-2 justify-content-center">
                <div className="col-8 ">
            <div className="card text-center">
            <div className="mybg2">
                <div className="card-header">
                    Create A Post
                </div>
            </div>
            
            <div className="nav-flex-container-style">
                <div className="card-body">
                    <h5 className="card-title">Special A Topic</h5>

                    <div className="dropdown">
                        <button className="btn  dropdown-toggle btn-outline-secondary m-3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b>{topicName}</b>
                        </button>

                        <ul className="dropdown-menu">
                            {topicArr}
                        </ul>
                    </div>
            

                        <div className="input-group" onChange={(e)=>{
                                setBody(e.target.value)
                            }}>
                            {/* <span className="input-group-text">With textarea</span> */}
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>

                        <button className="btn btn-outline-secondary nav-button m-3" onClick={() => {
                            makePost()
                            navigate('/timeline')
                            
                        }}><b>Submit</b></button>
                        </div>
            </div>

            <div className="mybg2">
                <div className="card-footer text-muted">
                    UserID: {state.currentUser.user_id}
                </div>
            </div>
            
            </div>
            </div>
            </div>
            </div>
        </>
    );
}

export default Post


{/* <div className="container px-5 text-center"></div>
<div className="row gx-5 g-2">
<div className="col-12 "> */}