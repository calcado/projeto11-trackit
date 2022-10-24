import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser(undefined);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
