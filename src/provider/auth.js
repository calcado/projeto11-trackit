import React, { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext({});
export const useAuth = () => React.useContext(AuthContext);
export const AuthProvider = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({});
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

