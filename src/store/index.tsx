import React, { FC, useContext, useReducer } from "react";
import { createContext } from "react";

export interface State {
  isLogin: boolean;
  tasksList: string[];
  user: any;
}

export enum Actions {
  setIsLogin = "setIsLogin",
  setTaskList = "setTaskList",
  setUser = "setUser",
}

const initialState: State = {
  isLogin: false,
  tasksList: [],
  user: null,
};

const Context = createContext({
  state: initialState,
  dispatch: (_: { type: Actions; payload?: any }) => {},
});

const reducer = (state: State, action: { type: Actions; payload?: any }) => {
  switch (action.type) {
    case Actions.setIsLogin:
      return {
        ...state,
        isLogin: action.payload,
      };
    case Actions.setTaskList:
      return {
        ...state,
        taskList: action.payload,
      };
    case Actions.setUser:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const AppState: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
