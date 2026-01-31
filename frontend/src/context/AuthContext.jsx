import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser({ token });
    setLoading(false);
  }, []);

  const register = async (data) => {
    const res = await api.post("register/", data);
    return res.data;
  };

  const login = async (data) => {
    const res = await api.post("login/", data);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      setUser({ token: res.data.token });
    }

    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

