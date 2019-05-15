import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const LoginLinks = () => {
  return(
    <div className="LoginLinks">
      <Link className="avatar" to="/">DN</Link>
      <NavLink className="navlink" to="/logout">Logout</NavLink>
      <NavLink className="navlink" to="/create">New Project</NavLink>
    </div>
  )
}

export default LoginLinks;
