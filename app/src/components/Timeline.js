
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";
import { API_URL } from "../services/auth.constants";
import '../App.css';

function Timeline() {

  const [ state, dispatch ] = useGlobalState();

const TIMELINE_URL = "timeline/?response_to__isnull=True"
const userURL = API_URL + TIMELINE_URL;

let dataObj = {}
const [timeline, setTimeline] = React.useState(null);

useEffect(() => {
  axios.get(userURL).then((response) => {
    dataObj = response.data
    setTimeline(dataObj)
  })
  .catch(function (error){
  })
  ;
}, []);

const htmlArray = []
function mapObj(){
  for (const key in timeline){
    htmlArray.push(        
        <div className="row gx-5 g-2">
          <div className="col-12 ">

            
            <div className="card text-center m-2">
              
                <div className='mybg2'>
                    <div className="card-header">
                        Original Poster: 
                        
                        <Link to="/userprofile" onClick={() => {dispatch({...state, VisitUser : timeline[key].author})}}>{timeline[key].author.username}</Link>, 
                        
                         {timeline[key].created}

                    </div>
                </div>
              

                  <div className="nav-flex-container-style">
                      <div className="card-body">
                          <h4 className="card-title">{timeline[key].topic == null ? 'No Topic':timeline[key].topic.categories}</h4>
                          <p className="card-text">{timeline[key].body}</p>
                      </div>
                  </div>
              
                  <div className='mybg2'>
                      <div className="card-footer text-muted">
                      <Link to="/thread" onClick={() => {
                        dispatch(state.currentThread = timeline[key])
                        console.log('Thread',state.currentThread)
                      }}><button className="btn btn-outline-secondary nav-button"><b>View</b><br/></button></Link>
                      </div>
                  </div>
            </div>
            
          </div>
        </div>
    )

    htmlArray.push()
  }
  return htmlArray
  
}






return (
    <>

      <div className="container px-5 text-center">
          <div>{mapObj()}</div>

      </div>


    </>
  );
}

export default Timeline;