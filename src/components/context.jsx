import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import reducer from './reducer';
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IS_DONE,
  SET_PROGRESS,
  SORT_TODO_LIST,
  INITIALIZE_TODO_LIST,
  TOGGLE_IS_SORTED,
} from './action';

const initialState = {
  todoList: [],
  progress: 0,
  isSortedByIsDone: false,
  isFirstTime: true,
};

const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const bottomRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: { ...todo } });
    dispatch({ type: SET_PROGRESS });
    setTimeout(() => {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 10);
    dispatch({ type: SORT_TODO_LIST });
  };
  
  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: { id } });
    dispatch({ type: SET_PROGRESS });
  };

  const toggleIsDone = (id) => {
    dispatch({ type: TOGGLE_IS_DONE, payload: { id } });
    dispatch({ type: SET_PROGRESS });
    dispatch({ type: SORT_TODO_LIST });
  };

  const sortTodoList = () => {
    dispatch({ type: TOGGLE_IS_SORTED });
    dispatch({ type: SORT_TODO_LIST });
  };

  // update state if localStorage has data
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todo-list'));
    const isSortedByIsDone = JSON.parse(localStorage.getItem('is-sorted'));
    const progress = JSON.parse(localStorage.getItem('progress'));

    if (todoList === null || isSortedByIsDone === null || progress === null)
      return;
    dispatch({
      type: INITIALIZE_TODO_LIST,
      payload: { todoList, isSortedByIsDone, progress },
    });
  }, []);

  // update localStorage data every state change
  useEffect(() => {
    const { todoList, progress, isSortedByIsDone, isFirstTime } = state;
    // prevent reset localStorage data
    if (isFirstTime) return;
    localStorage.setItem('todo-list', JSON.stringify(todoList));
    localStorage.setItem('progress', JSON.stringify(progress));
    localStorage.setItem('is-sorted', JSON.stringify(isSortedByIsDone));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        bottomRef,
        dispatch,
        addTodo,
        removeTodo,
        toggleIsDone,
        sortTodoList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
