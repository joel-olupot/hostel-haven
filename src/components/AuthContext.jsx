// AuthContext.js
import React, { createContext, useContext, useReducer } from "react";
import authReducer from "./authReducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer /* initial state */);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
