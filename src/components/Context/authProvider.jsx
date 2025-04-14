import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
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

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={(user, isAuthenticated, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
}
