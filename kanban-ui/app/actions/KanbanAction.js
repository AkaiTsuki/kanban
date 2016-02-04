import * as ActionType from '../constants/KanbanActionType';
import fetch from 'isomorphic-fetch';

/**
* Add a new task to the target lane
*/
export function addTask(target){
  return {
    type: ActionType.ADD_TASK,
    task: "New Task",
    target: target
  };
}

export function deleteTask(target, id) {
  return {
    type: ActionType.DELETE_TASK,
    target: target,
    id
  };
}

export function updateTask(target, id, job){
  return {
    type: ActionType.UPDATE_TASK,
    target,
    id,
    job
  };
}

export function requestData(){
  return {
    type: ActionType.REQUEST_DATA
  };
}

export function receiveData(json){
  return {
    type: ActionType.RECEIVE_DATA,
    json
  }
}

export function fetchData(){
  return (dispatch,state) => {
    dispatch(requestData());
    return fetch('http://localhost:3000/api/board').then(req => req.json()).then(json => dispatch(receiveData(json)));
  };
}

export function createTask(laneId){
  return (dispatch, state) => {
    dispatch(requestData());
    var body = JSON.stringify({target: laneId, task: {job: "new job"}});
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    return fetch('http://localhost:3000/api/board', {method: 'POST', headers: headers, body: body}).then(res=>res.json()).then(json=>dispatch(receiveData(json)));
  };
}
