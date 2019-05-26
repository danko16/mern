import React, {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {registerUser} from '../../actions/authAction';
import {clearErrors} from '../../actions/errorAction';

class Register extends Component{
  state={
    email: "",
    password: "",
    firstName: "",
    lastName:"",
    msg: null
  }  
  componentDidMount(){
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps){
    const {error} = this.props;
    const {isAuthorize} = this.props;

    if(error !== prevProps.error){
      if(error.id === "REGISTER_FAIL"){
        this.setState({msg: error.msg})
      }else{
        this.setState({msg: null})
      }
    }

    if(isAuthorize === true){
      this.props.history.push('/project');
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();      
    this.props.registerUser(this.state);    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleError = () => {
    this.setState({msg: null});    
    this.props.clearErrors();
  }
  render(){
    const errorBox = this.state.msg ? 
        <div className="alert">
          <span className="closebtn" onClick={this.handleError}>&times;</span> 
          <strong>{this.state.msg}</strong>
        </div> : null;

    return(
      <div className="Register container">
        {errorBox}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange} required/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={this.handleChange} required/>

          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" onChange={this.handleChange} required/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" onChange={this.handleChange} required/>

          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

Register.propTypes = {
  isAuthorize: propTypes.bool,
  error: propTypes.object.isRequired,
  registerUser: propTypes.func.isRequired,
  clearErrors: propTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthorize: state.auth.isAuthorize,
    error: state.error
  }
}

export default connect(mapStateToProps, {registerUser,clearErrors})(Register);
