import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProject, setItemsLoading} from '../../actions/projectAction'

const ProjectSummary = ({projects}) => {
  const project = projects.length ? (
    projects.map(element=>{
      return (
        <div className="project" key={element._id}>
          <Link to={"/project/" + element._id}><span><b>{element.title}</b></span></Link>
          <p className="author">{element.author}</p>
          <p className="date">{element.date}</p>
        </div>
      )
    })
  ) : (
    <div>
      <p>There is no project yet</p>
    </div>
  )
  return(
    <div className="ProjectSummary">
      {project}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps,{getProject, setItemsLoading})(ProjectSummary);
