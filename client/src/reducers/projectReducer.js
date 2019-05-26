import {GET_PROJECT,ADD_PROJECT,DELETE_PROJECT,ITEMS_LOADING} from '../actions/type';

const initialState = {
  projects: [],
  loading: false
};

export default function (state = initialState, action) {
  let newProjects;

  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        projects: action.project,
        loading: false
      };

    case ADD_PROJECT:
      newProjects = [...state.projects, action.project]
      return {
        ...state,
        projects: newProjects
      };

    case DELETE_PROJECT:
      newProjects = state.projects.filter(element=>{return element._id !== action._id});
      return {
        ...state,
        projects: newProjects
      };

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
