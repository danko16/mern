import React , {Component} from 'react';
import ProjectDetail from '../project/ProjectDetail';
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
        <ProjectDetail/>        
      </div>
    )
  }
}

DashBoard.propType = {
  clearErrors: propType.func.isRequired
}

export default connect(null,{clearErrors})(DashBoard);
