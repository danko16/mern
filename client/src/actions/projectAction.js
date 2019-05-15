import axios from 'axios';
import {GET_PROJECT,ADD_PROJECT,DELETE_PROJECT,ITEMS_LOADING} from './type';

export const getProject = () => dispatch => {
  axios
    .get('http://localhost:5000/api/project')
    .then(res => {
      dispatch({
          type: GET_PROJECT,
          project: res.data
      });
    })
    .catch(err=>{console.log(err)})
}

export const addProject = (project) => dispatch => {
    axios
      .post('http://localhost:5000/api/project', project)
      .then(res => {
        dispatch({
          type: ADD_PROJECT,
          project: res.data
        });
      })
      .catch(err=>{console.log(err)})
}

export const deleteProject = (id) => dispatch => {
    axios
      .delete(`http://localhost:5000/api/project/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_PROJECT,
          _id: id
        });
      })
      .catch(err=>{console.log(err)})
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
