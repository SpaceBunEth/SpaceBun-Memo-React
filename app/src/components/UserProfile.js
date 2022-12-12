import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request'
import '../App.css';

function UserProfile(props) {

    const [ state, dispatch ] = useGlobalState();
    const [posts, setPosts] = useState();
    console.log(state)
    

    const user = state.VisitUser
    console.log("VisitUser", state.VisitUser)
    console.log('UserProfile', user.id)

    const htmlArray = []
    function mapObj(){
    //   for (const key in user){
    //     htmlArray.push(
    //       <div key={key + ":" + user[key]}>
    //       <div>{key + ":" + user[key]}</div>
    //       </div>
    //     )
    //   }

    htmlArray.push(
        <>
          <div className="card mb-3">
            {/* <img src="../1741329.png"  className="card-img-top" alt="..."/> */}
                    <div className="nav-flex-container-style">
                    <div className="card-body">
                    
                    <p className="card-text"><small className="text-muted">UserID: {user.id}</small></p>
                        
                        <h5 className="card-title">Username: {user.username}</h5>
                        <p className="card-text">Bio:{user.bio}</p>
                        <p className="card-text"><small className="text-muted">Joined {user.date_joined}</small></p>
                    </div>
              </div>
          </div>
        </>
      )
      return htmlArray
      
    }

    useEffect(() => {
        async function getUserPosts() {
            let options = {
                url: `userpostsrecent/?author=`+ user.id,
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

            userPosts.push(
            <>
                <div className="row gx-5 g-2">
                <div className="col-8">
        
                    <div className="card text-center m-2">
                    <div className="card-header">
                    Original Poster: 
                    
                    <Link to="/userprofile" onClick={() => {dispatch({...state, VisitUser : posts[key].author})}}>{posts[key].author.username}</Link>, 
                    
                        
        
                    </div>
                    <div className="card-body">
                        <p className="card-text">{posts[key].body}</p>
                    </div>
                    <div className="card-footer text-muted">
                    {/* <Link to="/userprofile" onClick={() => {
                        console.log('posts',posts[key].author)
                        dispatch(state.VisitUser = posts[key].author)
                        
                    }}>Profile: {posts[key].id}<br/></Link> */}
                    Created : {posts[key].created}
                    </div>
                    </div>
                    
                </div>
                </div>
            </>
            )

            // for(const j in posts[key]){
            // userPosts.push(
            //     <div key={key + j + ":" + posts[key][j]}>
            //     <div>{j + ":" + posts[key][j]}</div>
            //     </div>
            // )
            // }
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