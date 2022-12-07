import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import EditProfile from './components/user/EditProfile';
import Timeline from './components/Timeline';
import Thread from './components/Thread';
import Post from './components/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="thread" element={<Thread />} />
          <Route path="post" element={<Post />} />


        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);