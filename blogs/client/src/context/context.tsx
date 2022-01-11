import React, { useReducer } from "react";

interface STATE {
  user: null | object;
  isFetching: boolean;
  error: boolean;
}

interface T {
  user: null | object;
  isFetching: boolean;
  error: boolean;
}

type ACTION = { type: string; payload: Object };

const defaultStore = {
  user: null,
  isFetching: false,
  error: false,
};

const authContext = React.createContext<T>(defaultStore);

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
    default:
      return state;
  }
};

const authContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, defaultStore);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default authContextProvider;
