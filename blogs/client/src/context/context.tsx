import axios from "axios";
import React, { useEffect, useReducer } from "react";
import {USER} from '../interface/user'

interface STATE {
  user: null | USER;
  isFetching: boolean;
  error: boolean;
}

const defaultState = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  isFetching: false,
  error: false,
};

type ACTION =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: USER }
  | { type: "LOGIN_FAILURE" }
  | { type: "LOGOUT" };

interface STORE {
  user: null | USER;
  isFetching: boolean;
  error: boolean;
  loggin: (username: string, password: string) => void;
  logout: () => void;
  dispatch: React.Dispatch<ACTION>;

}

const defaultStore: STORE = {
  user: null,
  isFetching: false,
  error: false,
  loggin: () => {},
  logout: () => {},
  dispatch: () => {},
};

export const authContext = React.createContext(defaultStore);

const Reducer = (state: STATE, action: ACTION): STATE => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, defaultState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // console.log(state.user)

  const logginHandler = async (username: string, password: string) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <authContext.Provider
      value={{
        error: state.error,
        isFetching: state.isFetching,
        user: state.user,
        loggin: logginHandler,
        logout: logoutHandler,
        dispatch: dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
