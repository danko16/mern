import React , {Component} from 'react';
import ProjectList from '../project/ProjectList';
import Notification from './Notification';

class DashBoard extends Component{
  render(){
    return(
      <div className="DashBoard container">
        <ProjectList/>
        <Notification/>
      </div>
    )
  }
}

export default DashBoard;
