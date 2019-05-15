import React from 'react';
import {Link} from 'react-router-dom';
import LogoutLinks from './LogoutLinks';
import LoginLinks from './LoginLinks';

const Navbar = () => {
  return(
    <div className="Navbar">
      <Link className="brand" to="/">This is brand</Link>
      <LoginLinks/>
      <LogoutLinks/>
    </div>
  )
}

export default Navbar;
