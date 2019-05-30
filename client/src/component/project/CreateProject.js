import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProject} from '../../actions/projectAction';

class CreateProject extends Component{
  state={
    title: "",
    content: "",
    author: "",
    isClose: false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProject(this.state);
    this.props.history.push('/');
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });    
  }
  handleClose =() =>{
      this.setState({
          isClose: !this.state.isClose
      })

      this.props.history.push('/');
  }
  render(){
    return(
      <div className="CreateProject Auth">
        <div className={this.state.isClose === false ? "modal" : "hide"}>                
            <form autoComplete="off"  className="modal-content animate" onSubmit={this.handleSubmit}>             
            <div className="container-auth">
               <div className="close-container">
                  <span className="close" onClick={this.handleClose} title="Close Modal">&times;</span>
               </div>
                <div className="container-input">
                    <label htmlFor="title"><b>Title</b></label>
                    <input type="text" name="title" onChange={this.handleChange} required/>
                </div>

                <div className="container-input">                                                
                    <label htmlFor="author"><b>Author</b></label>
                    <input type="text" name="author" onChange={this.handleChange} required/>
                </div>

                <div className="container-input">
                    <label htmlFor="content"><b>Project</b></label>
                    <textarea name="content" onChange={this.handleChange} required></textarea>
                </div>  

                <div className="container-input">
                    <button type="submit">Create</button>
                </div>
            </div>    
            </form>
        </div>
        </div>     
    )
  }
}


export default connect(null,{addProject})(CreateProject);
