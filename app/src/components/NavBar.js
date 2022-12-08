import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [ state, dispatch ] = useGlobalState();
  let navigate = useNavigate();

  function logout(){
    localStorage.clear()
    navigate('/')
  }

  return (
    <nav>
      <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/thread">Thread</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/userprofile">User Profile</Link>
        </li>        

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
                <Link to="/" onClick={logout}>LogOut</Link>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  );
}

export default NavBar;