/**
 * Navigation helper functions for consistent navigation behavior
 * across the application, whether in development or production.
 */

import { useNavigate } from 'react-router-dom';

/**
 * Custom hook to get a navigation function that works in all environments
 * @returns {Function} Navigation function
 */
export const useAppNavigate = () => {
  const navigate = useNavigate();
  
  return (path) => {
    // Always use React Router's navigate function
    navigate(path);
  };
};

/**
 * Handles authentication failures by clearing credentials and redirecting to login
 */
export const handleAuthFailure = () => {
  // Clear authentication data
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  
  // Redirect to login page using hash routing for GitHub Pages compatibility
  window.location.href = window.location.origin + window.location.pathname + '#/login';
};
