import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  todo: {
    text: '',
    isDone: false,
  },
  todoList: [],
};

const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
