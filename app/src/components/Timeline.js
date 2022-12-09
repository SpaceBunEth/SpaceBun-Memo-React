
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";
import { API_URL } from "../services/auth.constants";

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
    console.log(timeline[key])
    // for(const j in timeline[key]){
    //   htmlArray.push(
    //     <div key={key + j + ":" + timeline[key][j]}>
    //     <div>{j + ":" + timeline[key][j]}</div>
    //     </div>
    //   )
    // }

    htmlArray.push(        
        <div className="row gx-5 g-2">
          <div className="col-12">

            <div className="card text-center m-2">
              <div className="card-header">
              Original Poster: 
              
              <Link to="/userprofile" onClick={() => {dispatch({...state, VisitUser : timeline[key].author})}}>{timeline[key].author.username}</Link>, 
              
              {timeline[key].topic == null ? 'No Topic':timeline[key].topic.categories}, {timeline[key].created}

              </div>
              <div className="card-body">
                <h5 className="card-title">{timeline[key].topic == null ? 'No Topic':timeline[key].topic.categories}</h5>
                <p className="card-text">{timeline[key].body}</p>
                <a href="#" className="btn btn-primary">Reply</a>
              </div>
              <div className="card-footer text-muted">
              <Link to="/thread" onClick={() => {dispatch(state.currentThread = timeline[key])}}>Thread: {timeline[key].id}<br/></Link>
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
      <h2>Timeline</h2>

      
      <div className="container px-5 text-center">
          <div>{mapObj()}</div>

      </div>


    </>
  );
}

export default Timeline;