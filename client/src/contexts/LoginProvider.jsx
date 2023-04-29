import React, { useState, createContext } from "react";

export const LoginContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  return (
    <LoginContext.Provider value={{ account, setAccount }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
