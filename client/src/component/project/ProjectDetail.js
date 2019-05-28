import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProject} from '../../actions/projectAction';
import {getProject} from '../../actions/projectAction';

class ProjectDetail extends Component{ 
  componentDidMount(){
    this.props.getProject();   
  }
  handleDelete = (id) => {
    this.props.deleteProject(id);
  }
  render(){
    const {projects} = this.props;
    const projectList = projects.length ? projects.map(project => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' ,hour: 'numeric',minute:'numeric'};
      const date = new Date(project.date);
      return (
        <div className="content" key={project._id}>
          <p className="title"><b>{project.title}</b></p>
          <p className="paragraph">{project.content}</p>
          <div className="author-date">
            <p className="author">{project.author}</p>
            <p className="date">{date.toLocaleDateString("id-in", options)}</p>
          </div>
          <button className="del-project" onClick={()=>{this.handleDelete(project._id)}}>delete</button>
        </div>
      )
    }) : <div></div>
    return(
      <div className={projects.length ? "ProjectDetail" : "ProjectDetail hide"}>
        {projectList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps,{deleteProject,getProject})(ProjectDetail);
