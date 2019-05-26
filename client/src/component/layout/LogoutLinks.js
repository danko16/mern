import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

const LogoutLinks = ({isAuthorize}) => {  
  return(
    <div className={isAuthorize === true ? "LogoutLinks hide": "LogoutLinks"}>
      <NavLink className="register" to="/register">Register</NavLink>
      <NavLink className="navlink" to="/login">Login</NavLink>
    </div>
  )
}

LogoutLinks.propTypes = {
    isAuthorize: propTypes.bool
};

const mapStateToProps = (state) => {
  return {
    isAuthorize: state.auth.isAuthorize
  }
};

export default connect(mapStateToProps,)(LogoutLinks);

