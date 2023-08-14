import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IS_DONE,
  SET_PROGRESS,
  SORT_TODO_LIST,
  INITIALIZE_TODO_LIST,
} from './action';

const initialState = {
  todoList: [],
  progress: 0,
  isSorted: false,
};

const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: { ...todo } });
    dispatch({ type: SET_PROGRESS });
  };
  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: { id } });
    dispatch({ type: SET_PROGRESS });
  };

  const toggleIsDone = (id) => {
    dispatch({ type: TOGGLE_IS_DONE, payload: { id } });
    dispatch({ type: SET_PROGRESS });
  };

  const setProgress = () => {
    dispatch({ type: SET_PROGRESS });
  };

  const sortTodoList = (isSorted) => {
    dispatch({ type: SORT_TODO_LIST, payload: { isSorted } });
  };

  // update state if localStorage has data
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todo-list'));
    const isSorted = JSON.parse(localStorage.getItem('is-sorted'));
    const progress = JSON.parse(localStorage.getItem('progress'));

    if (todoList === null || isSorted === null || progress === null) return;
    dispatch({
      type: INITIALIZE_TODO_LIST,
      payload: { todoList, isSorted, progress },
    });
  }, []);

  // update localStorage data every state change
  useEffect(() => {
    const { todoList, progress, isSorted } = state;
    console.log(JSON.stringify(0));
    // prevent reset localStorage data
    if (!todoList.length) return;
    localStorage.setItem('todo-list', JSON.stringify(todoList));
    localStorage.setItem('progress', JSON.stringify(progress));
    localStorage.setItem('is-sorted', JSON.stringify(isSorted));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        addTodo,
        removeTodo,
        toggleIsDone,
        setProgress,
        sortTodoList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
