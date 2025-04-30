import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateTo } from '../utils/BasePath';

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
    
    // Use the utility function for GitHub Pages navigation
    navigateTo('/login');
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