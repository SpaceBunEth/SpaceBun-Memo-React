import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request'
import '../App.css';

function UserProfile(props) {

    const [ state, dispatch ] = useGlobalState();
    const [posts, setPosts] = useState();
    console.log(state)
    
    useEffect(() => {
        console.log('new render', state.VisitUser)

    }, [state.VisitUser])

    // useEffect(() => {
    //     async function getComments(){
    //         let options = {
    //             url: userURL,
    //             method: 'GET',

    //         }
    //         let resp = await request(options)
    //         setPostUser(resp.data)
    //     }
    //     getComments()
    // }, [state.postReply])

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
    }, [state.VisitUser])

    const userPosts = []

    function getUserPosts(){
        console.log('posts',posts)
        for (const key in posts){

            userPosts.push(
            <>
                <div className="row gx-5 g-2">
                <div className="col-8">
        
                    <div className="card text-center m-2">
                        <div className="mybg2">
                            <div className="card-header">
                            
                            <h5>
                                Original Poster: 
                            
                                <Link to="/userprofile" onClick={() => {dispatch({...state, VisitUser : posts[key].author})}}>{posts[key].author.username}</Link>, 
                            </h5>
                            
                            </div>
                        </div>

                    <div className="nav-flex-container-style">
                        <div className="card-body">
                            <p className="card-text">{posts[key].body}</p>
                        </div>
                    </div>

                        <div className="mybg2">
                            <div className="card-footer text-muted p-0">
                            {/* <Link to="/userprofile" onClick={() => {
                                console.log('posts',posts[key].author)
                                dispatch(state.VisitUser = posts[key].author)
                                
                            }}>Profile: {posts[key].id}<br/></Link> */}
                            <p className="m-0"><small>Created : {posts[key].created}</small></p>
                            </div>
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
            <div className="container px-5 text-center">
            <div>{mapObj()}</div>
            <div>{getUserPosts()}</div>
            </div>

        </>
    );
}

export default UserProfile;


// <div className="row gx-5 g-2"></div>
// <div className="col-12 "></div>