import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import React, { useState, useEffect } from "react";
import request from '../services/api.request'
import { useNavigate } from 'react-router-dom';


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
            <h1>Post</h1>


            <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {topicName}
            </a>

            <ul className="dropdown-menu">
                {topicArr}
            </ul>
            </div>
            

            <label htmlFor="body">Body:</label><br/>
            <input 
                onChange={(e)=>{
                    setBody(e.target.value)
                }}
                type="text" 
                id="body" 
                name="body"/>
            
            <br/>
            <button onClick={() => {
                makePost()
                navigate('/timeline')
                
                }}>Submit</button>
        </>
    );
}

export default Post