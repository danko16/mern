import React, {Component} from 'react';
import ProjectSummary from './ProjectSummary';
import {getProject} from '../../actions/projectAction'
import {connect} from 'react-redux';

class  ProjectList extends Component{
  componentDidMount(){
    this.props.getProject();
  }
  render(){
    return(
      <div className="ProjectList">
        <ProjectSummary/>
      </div>
    )
  }
}

export default connect(null,{getProject})(ProjectList);
