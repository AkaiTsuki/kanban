import { DELETE_TASK, UPDATE_TASK, REQUEST_DATA, RECEIVE_DATA,REQ_ADD_TASK,RES_ADD_TASK,REQUEST_BOARD,RECEIVE_BOARD } from '../constants/KanbanActionType';
import uuid from 'node-uuid';
import { combineReducers } from 'redux'



function deleteTaskFromTargetLane(state, target, id){
  var board = Object.assign({}, state);
  board[target].tasks = board[target].tasks.filter(task => task.id !== id);

  return board;
}

function updateTask(state, target, id, job){
  var board = Object.assign({}, state);
  board[target].tasks = board[target].tasks.map(task => {
    if(task.id === id) {
      return {
        id: task.id,
        job
      }
    } else {
      return task;
    }
  });
  return board;
}

function boadReducer(state = {}, action){
  switch (action.type) {
    case DELETE_TASK:
      return deleteTaskFromTargetLane(state, action.target, action.id);
    case UPDATE_TASK:
      return updateTask(state, action.target, action.id, action.job);
    case RECEIVE_BOARD:
    case RES_ADD_TASK:
      return action.json;
    default:
      return state;
  }
}

const initLoadingState = {
  backlog: false,
  open: false,
  processing: false,
  done: false
};

function loadingReducer(state = initLoadingState, action){

  switch (action.type) {
    case REQ_ADD_TASK:
      return Object.assign({}, state, {
        [action.target]: true
      });
    case REQUEST_BOARD:
      return Object.assign({}, state, {
        backlog: true,
        open: true,
        processing: true,
        done: true
      });
    case RECEIVE_BOARD:
      return Object.assign({}, state, {
        backlog: false,
        open: false,
        processing: false,
        done: false
      });
    case RES_ADD_TASK:
      return Object.assign({}, state, {
        [action.target]: false
      });
    default:
      return state;
  }
}

function initReducer(state = true, action){
  switch (action.type){
    case REQUEST_BOARD:
      return true;
    case RECEIVE_BOARD:
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  isInit: initReducer,
  board: boadReducer
});

export default rootReducer;
