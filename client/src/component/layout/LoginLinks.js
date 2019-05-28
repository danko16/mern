import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import {logoutUser} from '../../actions/authAction';

class LoginLinks extends Component{
  componentDidUpdate(prevProps){
    const {isAuthorize} = this.props;

    if(isAuthorize !== prevProps.isAuthorize){
      if(isAuthorize !== true){          
         this.props.history.push('/');
      }
    }
  }
  logout = () => {    
    this.props.logoutUser();     
  }

  render(){
    return(
      <div className={this.props.isAuthorize === true ? "LoginLinks": "LoginLinks hide"}>
        <Link className="navlink" onClick={this.logout} to="/logout">Logout</Link>
        <NavLink className="navlink" to="/create">New Project</NavLink>
      </div>
    )
  }
}

LoginLinks.propTypes = {
  isAuthorize: propTypes.bool,
  logoutUser: propTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isAuthorize: state.auth.isAuthorize
  }
};

export default withRouter(connect(mapStateToProps, {logoutUser})(LoginLinks));
