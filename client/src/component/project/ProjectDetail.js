import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProject} from '../../actions/projectAction';
import {getProject} from '../../actions/projectAction';
import Notification from '../dashboard/Notification';

class ProjectDetail extends Component{ 
    componentDidMount(){
    this.props.getProject(); 
  }
  handleDelete = (id) => {
    this.props.deleteProject(id);
  }  
  scrollToMyRef = (id) => {
    console.log(id);
    window.scrollTo(0, this.refs[id].offsetTop);
  }
  render(){
    const {projects} = this.props;
    const projectList = projects.length ? projects.map(project => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' ,hour: 'numeric',minute:'numeric'};
      const date = new Date(project.date);
      return (
        <div className="content" ref={`${project._id}`} key={project._id}>
          <p onClick={() => {this.scrollToMyRef(project._id)}} className="title"><b>{project.title}</b></p>
          <p className="paragraph">{project.content}</p>
          <div className="author-date">
            <p className="author">{project.author}</p>
            <p className="date">{date.toLocaleDateString("id-in", options)}</p>
          </div>
          <button className="del-project" onClick={()=>{this.handleDelete(project._id)}}>delete</button>
        </div>
      )
    }) : <div className="no-project"><p><b>There is no project yet</b></p></div>;    
   
    return(
      <div className="ProjectDetail">             
        <div ref="notif" className="notif">          
         <Notification scrollToMyRef={this.scrollToMyRef}/>  
        </div> 
        <div className="list">
         {projectList} 
        </div>   
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
