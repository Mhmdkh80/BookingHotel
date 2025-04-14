import { createContext, useReducer } from "react";

const authContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch(action.type)
}

const Fake_User = {
  name: "mohamad",
  email: "user@gmail.com",
  password: "1234",
};

export default function AuthContextProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  function login(email, password) {
    if (email === Fake_User.email && password === Fake_User.password)
      dispatch({ type: "login", payload: Fake_User });
  }

  function logout() {}
  return (
    <authContext.Provider value={(user, isAuthenticated, login, logout)}>
      {children}
    </authContext.Provider>
  );
}
