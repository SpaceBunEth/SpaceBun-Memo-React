import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";


function SearchResult(props) {


    const [ state, dispatch ] = useGlobalState();
    const userList = props.props 
    const htmlArray = []

    function displayUsers() {

        for (const key in userList){
            console.log('key',key, 'props+key',userList[key])
            for (const j in userList[key]){
                console.log('j',j,':',userList[key][j])
                htmlArray.push(
                    <div key={key + j + ":" + userList[key][j]}>
                    <div>{j + ":" + userList[key][j]}</div>
                    </div>
                )
            }
            htmlArray.push(
                <Link to="/userprofile" onClick={() => {dispatch({...state, VisitUser : userList[key]})}}>Visit Profile</Link>
            )
        }
        //   for (const key in props){
        //     console.log(props[0])
        //     htmlArray.push(
        //       <div key={key + ":" + props[key]}>
        //       <div>{key + ":" + props[key]}</div>
        //       </div>
        //     )
        //   }
        //   return htmlArray
          
    }
    displayUsers()

    return (
        <>
        SearchResult
        {htmlArray}
        </>
    );
}
export default SearchResult;