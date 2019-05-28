import axios from 'axios';
import {GET_PROJECT,ADD_PROJECT,DELETE_PROJECT,ITEMS_LOADING} from './type';
import {tokenConfig} from './authAction';
import {returnErrors} from './errorAction';

export const getProject = () => (dispatch) => {
  dispatch({type: ITEMS_LOADING});

  axios
    .get('/api/project')
    .then(res => {      
      dispatch({
          type: GET_PROJECT,
          project: res.data
      });
    })
    .catch(err=>{
      dispatch(returnErrors(err.response.data.msg, err.response.status, 'GET_PROJECTS_FAIL'));      
      
  });
}

export const addProject = (project) => (dispatch,getState) => {
    axios
      .post('/api/project', project,tokenConfig(getState))
      .then(res => {
        dispatch({
          type: ADD_PROJECT,
          project: res.data
        });
      })
      .catch(err=>{console.log(err)})
}

export const deleteProject = (id) => (dispatch,getState) => {
   axios
      .delete(`/api/project/${id}`,tokenConfig(getState))
      .then(res => {
        dispatch({
          type: DELETE_PROJECT,
          _id: id
        });
      })
      .catch(err=>{console.log(err)})
}