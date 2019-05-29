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
        msg: null,
        isClose: false
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
      handleClose = () =>{
        this.setState({
            isClose: !this.state.isClose
        })
        this.props.history.push('/');
    }
    render(){
        const errorBox = this.state.msg ? 
        <div className="alert">
          <span className="closebtn" onClick={this.handleError}>&times;</span> 
          <strong>{this.state.msg}</strong>
        </div> : null;
       return <div className="Login Auth">
                <div className={this.state.isClose === false ? "modal" : "hide"}>                   
                    <form className="modal-content animate" onSubmit={this.handleSubmit}>
                         
                        <div className="error-container">    
                          {errorBox}    
                        </div>

                        <div className="imgcontainer">                         
                            <img src="/img/img_avatar2.jpg" alt="Avatar" className="avatar"/>
                        </div>
                        
                        <div className="container-auth">
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} required/>

                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>
                                    
                            <button type="submit">Login</button>
                            <label>
                                <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChecked} name="remember"/> Remember me
                            </label>
                        </div>    

                        <div className="container-auth">
                            <button type="button" className="cancelbtn" onClick={this.handleClose}>Cancel</button>
                            <span className="psw">Forgot <a href="/">password?</a></span>
                        </div>
                    </form>
                </div>
              </div>       
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