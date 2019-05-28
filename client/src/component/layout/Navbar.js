import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import LogoutLinks from './LogoutLinks';
import LoginLinks from './LoginLinks';
import {connect} from 'react-redux';

class Navbar extends Component {
  state = {
    icon: true
  }
  handleClickIcon = () => {
    this.setState({
      icon: !this.state.icon
    });
  }
  render(){
    return(
      <div className={this.state.icon === true ? "Navbar responsive-hide" : "Navbar"}>        
        <div className={this.props.isAuthorize === true ? "avatar" : "avatar hide"}>
          <Link to="/user">DN</Link>  
        </div> 
        <div className="icon" onClick={this.handleClickIcon}>
          <i className="fa fa-bars"></i>
        </div>
        <Link className="brand" to="/">This is brand</Link>
        <LoginLinks/>
        <LogoutLinks/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isAuthorize: state.auth.isAuthorize,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Navbar);
