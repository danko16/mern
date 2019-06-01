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
    const isNotFound = this.props.notFound === true ? "hide" : "";
    const icon = this.state.icon === true ? "responsive-hide" : "";
    return(
      <div className={`Navbar ${isNotFound} ${icon}`}>        
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
    user: state.auth.user,
    notFound: state.error.notFound
  }
}

export default connect(mapStateToProps)(Navbar);
