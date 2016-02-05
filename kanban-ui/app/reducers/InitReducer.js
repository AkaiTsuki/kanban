import { REQUEST_BOARD, RECEIVE_BOARD} from '../constants/KanbanActionType';

export default function initReducer(state = true, action){
  switch (action.type){
    case REQUEST_BOARD:
      return true;
    case RECEIVE_BOARD:
      return false
    default:
      return state
  }
}
