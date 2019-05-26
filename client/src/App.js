import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import DashBoard from './component/dashboard/DashBoard';
import ProjectDetail from './component/project/ProjectDetail';
import CreateProject from './component/project/CreateProject';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {loadUser} from './actions/authAction';

class App extends Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/project" component={DashBoard}/>
              <Route path="/project/:id" component={ProjectDetail}/>
              <Route path="/create" component={CreateProject}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
