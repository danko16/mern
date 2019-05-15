import React, {Component} from 'react';

class Login extends Component{
  state={
    email: "",
    password: "",
    isChecked: true
  }
  handleChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
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
      <div className="Login container">
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

export default Login;
