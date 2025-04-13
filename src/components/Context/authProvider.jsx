import { createContext, useReducer } from "react";

const authContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};
function authReducer(state, action) {}

export default function AuthContextProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  function login(){}


  function logout(){}
  return <authContext.Provider>{children}</authContext.Provider>;
}
