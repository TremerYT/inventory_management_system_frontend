import {createContext, useContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

const  AuthContext = createContext();

export const AuthProvider = ( {children} ) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      }
      catch (e){
        localStorage.removeItem("accessToken");
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{user, loading, login, logout}}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);

