import React from 'react';
import {NavLink} from 'react-router-dom';

const LogoutLinks = () => {
  return(
    <div className="LogoutLinks">
      <NavLink className="navlink" to="/register">Register</NavLink>
      <NavLink className="navlink" to="/login">Login</NavLink>
    </div>
  )
}

export default LogoutLinks;
