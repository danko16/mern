import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import DashBoard from './component/dashboard/DashBoard';
import CreateProject from './component/project/CreateProject';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import NotFound from './component/layout/NotFound';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {loadUser} from './actions/authAction';

class App extends Component{
    
  componentDidMount(){
    const {token} = store.getState().auth;
    if(token){
      store.dispatch(loadUser());
    }
 }

  render(){
    return(
      <Provider store={store}>
       <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={DashBoard}/>
              <Route path="/create" component={CreateProject}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
