import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProject} from '../../actions/projectAction';

class CreateProject extends Component{
  state={
    title: "",
    content: "",
    author: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProject(this.state);
    this.props.history.push('/project');
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render(){
    return(
      <div className="CreateProject container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={this.handleChange} required/>

          <label htmlFor="author">Author</label>
          <input type="text" name="author" onChange={this.handleChange} required/>

          <label htmlFor="content">Project</label>
          <textarea name="content" onChange={this.handleChange} required></textarea>

          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}


export default connect(null,{addProject})(CreateProject);
