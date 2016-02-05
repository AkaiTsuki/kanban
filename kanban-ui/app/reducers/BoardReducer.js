import { DELETE_TASK, UPDATE_TASK,RES_ADD_TASK,RECEIVE_BOARD } from '../constants/KanbanActionType';

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
    case RES_ADD_TASK:
      return action.json;
    default:
      return state;
  }
}

export default boardReducer
