import React , {Component} from 'react';
import ProjectList from '../project/ProjectList';
import Notification from './Notification';
import {connect} from 'react-redux';
import {clearErrors} from '../../actions/errorAction';
import propType from 'prop-types';

class DashBoard extends Component{
 
  componentDidMount(){
    this.props.clearErrors(); 
  }
  render(){
    return(
      <div className="DashBoard container">
        <Notification/>
        <ProjectList/>        
      </div>
    )
  }
}

DashBoard.propType = {
  clearErrors: propType.func.isRequired
}

export default connect(null,{clearErrors})(DashBoard);
