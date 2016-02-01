import * as ActionType from '../constants/ActionType';

export function addNote(text){
  return {
    type: ActionType.ADD_NOTE,
    task: text
  };
}

export function deleteNote(id){
  return {
    type: ActionType.DELETE_NOTE,
    id: id
  };
}

export function editNote(id, text){
  return {
    type: ActionType.EDIT_NOTE,
    id: id,
    task, text
  };
}
