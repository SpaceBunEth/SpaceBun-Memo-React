
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { useGlobalState } from "../context/GlobalState";

function Timeline() {

  const [ state, dispatch ] = useGlobalState();

const API_URL = "https://8000-spacebuneth-spacebunmem-rr566be32ph.ws-us77.gitpod.io/api/";
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
    for(const j in timeline[key]){
      htmlArray.push(
        <div key={key + j + ":" + timeline[key][j]}>
        <div>{j + ":" + timeline[key][j]}</div>
        </div>
      )
    }
    htmlArray.push(<Link to="/thread" onClick={() => {dispatch(state.currentThread = timeline[key])}}>Thread: id<br/></Link>)
  }
  return htmlArray
  
}
return (
    <>
      <h2>Timeline</h2>
      <p>{mapObj()}</p>
    </>
  );
}

export default Timeline;