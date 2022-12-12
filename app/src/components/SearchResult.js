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

            htmlArray.push(
                <>
                    <div className="card mb-3">
                        {/* <img src="../1741329.png"  className="card-img-top" alt="..."/> */}
                            <div className="card-body">
                            <p className="card-text"><small className="text-muted">UserID: {userList[key].id}</small></p>
                            
                            <h5 className="card-title">Username: {userList[key].username}</h5>
                            <p className="card-text">Bio: {userList[key].bio}</p>
                            <p className="card-text"><small className="text-muted">Joined {userList[key].date_joined}</small></p>
                            <Link to="/userprofile" onClick={() => {dispatch({...state, VisitUser : userList[key]})}}><button className="btn btn-primary">Visit Profile</button></Link>
                        </div>
                    </div>
                </>
            )
            htmlArray.push(
                
            )
        }
          
    }
    displayUsers()

    console.log(userList)

    return (
        <>
        SearchResult
        

        {htmlArray}
        </>
    );
}
export default SearchResult;