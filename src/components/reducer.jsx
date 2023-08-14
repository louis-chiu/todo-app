import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IS_DONE,
  SET_PROGRESS,
  SORT_TODO_LIST,
} from './action';

const reducer = (state, action) => {
  if (action.type === ADD_TODO) {
    console.log(state);
  } else if (action.type === REMOVE_TODO) {
  } else if (action.type === TOGGLE_IS_DONE) {
  } else if (action.type === SET_PROGRESS) {
  } else if (action.type === SORT_TODO_LIST) {
  } else {
    throw new Error(`not existed action type: ${action.type}`);
  }
};

export default reducer;
