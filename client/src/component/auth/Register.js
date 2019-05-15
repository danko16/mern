import React, {Component} from 'react';

class Register extends Component{
  state={
    email: "",
    password: "",
    firstName: "",
    lastName:""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render(){
    return(
      <div className="Register container">
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

export default Register;
