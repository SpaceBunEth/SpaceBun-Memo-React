import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import '../App.css';


function NavBar() {
  const [ state, dispatch ] = useGlobalState();
  let navigate = useNavigate();

  function logout(){
    AuthService.logout();
    navigate('timeline');
    window.location.reload();
  }

  return (
    <>
    {/*<nav>
       <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}> 
        <li>
          <Link to="/">Home</Link>
        </li> 
        App.js left and right button offcanvas panel 

        <li>
          <Link to="/timeline">Timeline</Link>
        </li>

        {
          state.currentUser && (
            <>
              <li>
                <Link to="/post">Post</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </>
            )
          }
      

        {
          !state.currentUser && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )
        }
        {
          !state.currentUser && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )
        }
        {
          state.currentUser && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link onClick={logout}>LogOut</Link>
              </li>
            </>
          )
        }
      </ul>
    </nav>*/}
        



    <nav className="navbar navbar-expand-md navbar-light nav-flex-container-style p-1 m-5" aria-label="Third navbar example">
    <div className="container-fluid">
      {/* <h1 className="navbar-brand p-0 m-0">SpaceBun Memo</h1> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample03">
        <ul className="navbar-nav">
          
        <li className="nav-item px-3">
            <Link to="/timeline"><button className="btn btn-outline-secondary nav-button" aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                </svg>
              </button>
            </Link>
          </li>

          {/* Buttons left and right panel */}
          {/* left */}
          <li className="nav-item px-3">
            <button className="btn btn-outline-secondary nav-button " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            </svg>
              </button>
          </li>


          {/* right */}
          <li className="nav-item px-3">
            <button className="btn btn-outline-secondary nav-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
              </svg>
            </button>
          </li>


          <li className="nav-item px-3">
              {state.currentUser && (<Link to="/post">
              
              <button className="btn btn-outline-secondary nav-button" aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-post-fill" viewBox="0 0 16 16">
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5z"/>
                </svg>
                  
              </button>
       
                
                </Link>)}
          </li>
          
          <li className="nav-item">
            
          </li>

        </ul>
      </div>
    </div>
  </nav>
    </>
  );
}

export default NavBar;