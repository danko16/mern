import React from 'react';
import {Link} from 'react-router-dom';
import LogoutLinks from './LogoutLinks';
import LoginLinks from './LoginLinks';
import {connect} from 'react-redux';

const Navbar = ({isAuthorize}) => {
  return(
    <div className="Navbar">
      <Link className="brand" to={isAuthorize === true ? "/project" : "/"}>This is brand</Link>
      <LoginLinks/>
      <LogoutLinks/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    isAuthorize: state.auth.isAuthorize
  }
}

export default connect(mapStateToProps)(Navbar);
