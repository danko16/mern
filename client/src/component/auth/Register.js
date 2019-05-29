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
          if(error.id === "REGISTER_FAIL"){
            this.setState({msg: error.msg})
          }else{
            this.setState({msg: null})
          }
        }
        if(isAuthorize === true){
            this.props.history.push('/');
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
        </div> : <div></div>;
       return <div className="Register Auth">
                <div className={this.state.isClose === false ? "modal" : "hide"}>
                
                    <form className="modal-content animate" onSubmit={this.handleSubmit}>
                   
                        <div className="error-container">    
                          {errorBox}    
                        </div>
                        
                        <div className="container-auth">
                            <div className="container-input">
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="email" name="email" onChange={this.handleChange} required/>
                            </div>

                            <div className="container-input">
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" name="password" onChange={this.handleChange} required/>
                            </div>

                            <div className="container-input">
                            <label htmlFor="firstName"><b>First Name</b></label>
                            <input type="text" name="firstName" onChange={this.handleChange}  required/>
                            </div>

                            <div className="container-input">
                            <label htmlFor="lastName"><b>Last Name</b></label>
                            <input type="text" name="lastName" onChange={this.handleChange}  required/>
                            </div>

                            <div className="container-input">
                            <button type="submit">Register</button>
                            </div>
                        </div>    

                        <div className="container-auth">
                            <button type="button" className="cancelbtn" onClick={this.handleClose}>Cancel</button>
                        </div>
                    </form>
                </div>
              </div>       
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

export default connect(mapStateToProps, {registerUser,clearErrors})(Register);;