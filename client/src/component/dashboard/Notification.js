import React,{Component} from 'react';
import {connect} from 'react-redux';

class Notification extends Component {   
  handleScroll = (id)=>{
    console.log(this.props)
    this.props.scrollToMyRef(id);
  }
  render(){
    const {projects} = this.props;
    const projectList = projects.length ? (
      projects.map(project=>{
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' ,hour: 'numeric',minute:'numeric'};
        const date = new Date(project.date);
        return(
          <div className="project" key={project._id}>
            <p className="title" onClick={()=>{this.handleScroll(project._id)}}><b>{project.title}</b></p>
            <p className="author">{project.author}</p>
            <p className="date">{date.toLocaleDateString("id-in", options)}</p>
          </div>
        )
      })
    ) : (<div></div>)
    return(
      <div className="Notification">
      <div className="notif-title">
            <p><b>Notification</b></p>
         </div>   
        <div className="project-notif">
          {projectList}
        </div>
      </div>
    )
  }
}

const mapStateToPorps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToPorps)(Notification);
