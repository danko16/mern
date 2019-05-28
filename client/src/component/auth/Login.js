import React, {Component} from 'react';
import propType from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authAction';
import {clearErrors} from '../../actions/errorAction';

class Login extends Component{
  state={
    email: "",
    password: "",
    isChecked: true,
    msg: null
  }
  componentDidMount(){
    this.props.clearErrors();
  }
  componentDidUpdate(prevProps){
    const {error} = this.props;
    const {isAuthorize} = this.props;
    if(error !== prevProps.error){
      if(error.id === "LOGIN_FAIL"){
        this.setState({
          msg: error.msg
        });
      }else{
        this.setState({
          msg: null
        })
      }
    }

    if(isAuthorize === true){
      this.props.history.push('/');
    }
  }
  handleChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
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
      <div className="Login container">
        {errorBox}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange} required/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={this.handleChange} required/>

          <label><input type="checkbox" checked={this.state.isChecked} onChange={this.handleChecked}/>remember me</label>

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

Login.propType = {
  isAuthorize: propType.bool,
  error: propType.object.isRequired,
  clearErrors: propType.func.isRequired
}

const mapStateToProps = (state) =>{
  return {
    isAuthorize: state.auth.isAuthorize,
    error: state.error
  }
}

export default connect(mapStateToProps,{loginUser, clearErrors})(Login);
