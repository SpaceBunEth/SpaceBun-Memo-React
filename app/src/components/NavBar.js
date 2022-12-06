import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";

function NavBar() {
  const [ state, dispatch ] = useGlobalState();

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
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default NavBar;