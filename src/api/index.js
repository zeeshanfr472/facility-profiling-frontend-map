import axios from 'axios';

// API base URL - fallback to the Render deployed backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://facilityprofilingupdated.onrender.com';

// Create an axios instance with the correct backend URL
const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15 second timeout
});

// Add a request interceptor to add the auth token to requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    
    // Handle authentication errors
    if (error.response && error.response.status === 401) {
      console.log('Authentication failure - clearing credentials');
      
      // Clear authentication data
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      
      // Redirect to login page using hash routing for GitHub Pages compatibility
      window.location.href = window.location.origin + window.location.pathname + '#/login';
    }
    
    return Promise.reject(error);
  }
);

// Authentication API calls
export const login = (formData) => API.post('/login', formData, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export const register = (userData) => API.post('/register', userData);

// Inspection API calls
export const fetchInspections = () => API.get('/inspections/?limit=1000&skip=0'); 
export const fetchInspection = (id) => API.get(`/inspections/${id}`);
export const createInspection = (inspectionData) => API.post('/inspections/', inspectionData);
export const updateInspection = (id, inspectionData) => API.put(`/inspections/${id}`, inspectionData);
export const deleteInspection = (id) => API.delete(`/inspections/${id}`);

export default API;