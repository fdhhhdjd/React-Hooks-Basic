import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [Auth, setAuth] = useState(true);
  const Toggle = () => {
    setAuth(!Auth);
  };
  const AuthContextData = {
    Auth,
    Toggle,
  };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
