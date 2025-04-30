import React, { createContext, useState, useEffect } from 'react';
// If you're using useNavigate, you can keep it for other navigations
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUser({ username: localStorage.getItem('username') });
    }
    setIsLoading(false);
  }, []);

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
    setIsAuthenticated(false);
    
    // Use window.location for reliable navigation in hash router
    window.location.href = "/#/login";
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};