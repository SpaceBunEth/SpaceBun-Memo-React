import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request'

function UserProfile(props) {

    const [ state, dispatch ] = useGlobalState();
    const [posts, setPosts] = useState();
    console.log(state)
    

    const user = state.VisitUser
    console.log('UserProfile', user.id)

    const htmlArray = []
    function mapObj(){
      for (const key in user){
        htmlArray.push(
          <div key={key + ":" + user[key]}>
          <div>{key + ":" + user[key]}</div>
          </div>
        )
      }
      return htmlArray
      
    }

    useEffect(() => {
        async function getUserPosts() {
            let options = {
                url: `userposts/?author=`+ user.id,
                method: 'GET'
            }
            let resp = await request(options)
            setPosts(resp.data)
            
        }
        getUserPosts()
    }, [])

    const userPosts = []

    function getUserPosts(){
        console.log('posts',posts)
        for (const key in posts){
            for(const j in posts[key]){
            userPosts.push(
                <div key={key + j + ":" + posts[key][j]}>
                <div>{j + ":" + posts[key][j]}</div>
                </div>
            )
            }
            // userPosts.push(<Link to="/thread" onClick={() => {dispatch(state.currentThread = posts[key])}}>Thread: id<br/></Link>)
        }
        return userPosts


    }


    return(
        <>
            Other User Profile
            <h1>{mapObj()}</h1>
            <h3>{getUserPosts()}</h3>

        </>
    );
}

export default UserProfile;