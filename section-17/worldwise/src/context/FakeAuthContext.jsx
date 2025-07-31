import { useContext, useReducer } from "react";

const FakeAuthContext = () => {
  return <div>FakeAuthContext</div>;
};
const initialState = {
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function FakeAuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(email, password) {
    if (email !== FAKE_USER.email || password !== FAKE_USER.password)
      dispatch({
        type: "login",
        payload: FAKE_USER,
      });
  }
  function logout() {
    dispatch({
      type: "logout",
    });
  }
  return (
    <FakeAuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
      {children}
    </FakeAuthContext.Provider>
  );
}

function useFakeAuth() {
  const context = useContext(FakeAuthContext);
  if (!context)
    throw new Error("useFakeAuth must be used within a FakeAuthProvider");
  return context;
}
export { FakeAuthProvider, useFakeAuth, FakeAuthContext };
