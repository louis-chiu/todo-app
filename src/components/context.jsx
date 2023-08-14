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
  isSorted: false,
};

const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: { ...todo } });
  };
  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: { id } });
  };

  const toggleIsDone = (id) => {
    dispatch({ type: TOGGLE_IS_DONE, payload: { id } });
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

    if (todoList === null || isSorted === null) return;
    dispatch({
      type: INITIALIZE_TODO_LIST,
      payload: { todoList, isSorted },
    });
  }, []);

  // update localStorage data every state change
  useEffect(() => {
    const { todoList, isSorted } = state;

    // prevent reset localStorage data
    if (!todoList.length) return;

    localStorage.setItem('todo-list', JSON.stringify(todoList));
    localStorage.setItem('is-sorted', isSorted);
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
