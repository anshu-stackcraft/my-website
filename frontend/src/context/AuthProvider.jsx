import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 SESSION RESTORE (page refresh)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("me/");
        // ✅ support both {user: {...}} and {...}
        setUser(res.data.user ?? res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // 🔐 LOGIN
  const login = async (data) => {
    const res = await api.post("login/", data);

    // ✅ backend sends { user: {...} }
    if (res.data?.user) {
      setUser(res.data.user);
    } else {
      throw new Error("Invalid login response");
    }

    return res.data;
  };

  // 📝 REGISTER
  const register = async (data) => {
    const res = await api.post("register/", data);
    return res.data;
  };

  // 🚪 LOGOUT
  const logout = async () => {
    try {
      await api.post("logout/");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {!loading ? children : null}
    </AuthContext.Provider>
  );
};
