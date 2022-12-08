import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import React, { useState, useEffect } from "react";
import request from '../services/api.request'
import SearchResult from './SearchResult'

function Search() {

    const [searchBar, setSearchBar] = useState();
    const [userList, setUserList] = useState([]);

        async function getSearch() {
            let options = {
                url: `/searchuser/?search=`+searchBar,
                method: 'GET'
            }
            let resp = await request(options)
            setUserList(resp.data)
            if(resp.data.length == 0){
                console.log('NO USER FOUND')

            }
            
        }
        
        console.log('userlist',userList)


    

    return(
        <>
        <h1>Search</h1>
        <label htmlFor="body">Enter UserName:</label><br/>
            <input 
                onChange={(e)=>{
                    setSearchBar(e.target.value)
                }}
                type="text" 
                id="body" 
                name="body"/>
            
            <br/>
            <button onClick={getSearch}>Search</button>
            {userList.length > 0 ? <SearchResult props={userList}></SearchResult> : <>Null Results</>}
            
        </>
    );
}

export default Search;