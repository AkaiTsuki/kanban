import * as ActionType from '../constants/KanbanActionType';

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
