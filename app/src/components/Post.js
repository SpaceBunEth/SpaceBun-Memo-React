// import { Link } from "react-router-dom";
// import { useGlobalState } from "../context/GlobalState";

function Post() {
    return(
        <>
            <h1>Post</h1>
            <label htmlFor="body">Body:</label><br/>
            <input type="text" id="body" name="body"/><br/>
            <label htmlFor="body">Topic:</label><br/>
            <input type="text" id="body" name="body"/><br/>
            <button>Submit</button>
        </>
    );
}

export default Post