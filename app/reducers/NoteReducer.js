import {ADD_NOTE, DELETE_NOTE, EDIT_NOTE} from '../constants/ActionType';
import uuid from 'node-uuid';

const initState = [
  {
    id: uuid.v4(),
    task: 'Learn Webpack'
  },
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

export default function notes(state=initState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        {
          id: uuid.v4(),
          task: action.task
        },
        ... state
      ];
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.id);
    case EDIT_NOTE:
      return state.map( note => note.id === action.id ? Object.assign({}, note, {task: action.task}) : note);
    default:
      return state;
  }
}
