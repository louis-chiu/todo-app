import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IS_DONE,
  SET_PROGRESS,
  SORT_TODO_LIST,
  INITIALIZE_TODO_LIST,
} from './action';

const reducer = (state, action) => {
  if (action.type === ADD_TODO) {
    const todo = action.payload;
    const { todoList } = state;
    return { ...state, todoList: [...todoList, todo] };
  } else if (action.type === REMOVE_TODO) {
    const { id } = action.payload;
    const { todoList } = state;

    return { ...state, todoList: todoList.filter((todo) => todo.id !== id) };
  } else if (action.type === TOGGLE_IS_DONE) {
    const { id } = action.payload;
    const { todoList } = state;
    const newTodoList = [...todoList];

    return {
      ...state,
      todoList: newTodoList?.map((todo) => {
        if (todo.id !== id) return todo;
        if (todo.id === id) return { ...todo, isDone: !todo.isDone };
      }),
    };
  } else if (action.type === SET_PROGRESS) {
    const { todoList } = state;

    if (!todoList.length) return { ...state, progress: 0 };

    const isDoneLength = todoList.filter((todo) => todo.isDone).length;
    return {
      ...state,
      progress: Math.floor((isDoneLength / todoList.length) * 100),
    };
  } else if (action.type === SORT_TODO_LIST) {
  } else if (action.type === INITIALIZE_TODO_LIST) {
    return { ...action.payload };
  } else {
    throw new Error(`not existed action type: ${action.type}`);
  }
  console.log(state);
};

export default reducer;
