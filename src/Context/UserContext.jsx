import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = {
      name: localStorage.getItem('name'),
      phone: localStorage.getItem('phone'),
      email: localStorage.getItem('mail'),
    };
    if (storedUser.name && storedUser.phone) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('name', userData.name);
    localStorage.setItem('phone', userData.phone);
    localStorage.setItem('mail', userData.email);
    setUser(userData);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);