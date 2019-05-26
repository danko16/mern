import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProject} from '../../actions/projectAction';

class ProjectDetail extends Component{
  componentDidMount(){
      console.log(this.props);
  }
  handleDelete = (id) => {
    this.props.deleteProject(id);
    this.props.history.push('/project');
  }
  render(){
    const {project} = this.props;
    return(
      project ? (
        <div className="ProjectDetail container">
          <div className="content">
            <span><b>{project.title}</b></span>
            <p>{project.content}</p>
            <p className="author">{project.author}</p>
            <p className="date">{project.date}</p>
            <button onClick={()=>{this.handleDelete(project._id)}}>delete</button>
          </div>
        </div>
      ) : (null)
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    project: state.project.projects.find(element=>{
      return element._id === id;
    })
  }
}

export default connect(mapStateToProps,{deleteProject})(ProjectDetail);
