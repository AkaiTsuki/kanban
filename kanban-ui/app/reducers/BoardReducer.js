import { DELETE_TASK, UPDATE_TASK,RECEIVE_ADD_TASK,RECEIVE_BOARD } from '../constants/KanbanActionType';

function addTask(state, task, target){
  var board = Object.assign({}, state);
  board[target].tasks = [task, ...board[target].tasks];

  return board;
}

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

const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return deleteTaskFromTargetLane(state, action.target, action.id);
    case UPDATE_TASK:
      return updateTask(state, action.target, action.id, action.job);
    case RECEIVE_BOARD:
      return action.json
    case RECEIVE_ADD_TASK:
      return addTask(state, action.json, action.target);
    default:
      return state;
  }
}

export default boardReducer
