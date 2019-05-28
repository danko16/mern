import React, {Component} from 'react';
import {getProject} from '../../actions/projectAction';
import {connect} from 'react-redux';
import ProjectDetail from './ProjectDetail';

class  ProjectList extends Component{
  componentDidMount(){
    this.props.getProject();
  }
  render(){
    const projects = this.props.projects.length ?  <ProjectDetail/> :
    <p className="no-project"><b>There is no project yet</b></p>
    return(
      <div className="ProjectList">
        {projects}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps,{getProject})(ProjectList);
