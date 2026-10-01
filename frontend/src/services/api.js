import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Request interceptor: inject JWT token if stored
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('drb_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: extract error messages cleanly
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'An unexpected error occurred. Please try again.';
    if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.message === 'Network Error') {
      message = 'Network error: Cannot reach the server. Make sure backend is running.';
    }

    // Auto logout if 401 unauthorized and token present
    if (error.response?.status === 401 && localStorage.getItem('drb_auth_token')) {
      localStorage.removeItem('drb_auth_token');
      localStorage.removeItem('drb_auth_user');
      if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        window.location.href = '/login?expired=true';
      }
    }

    return Promise.reject(new Error(message));
  }
);

export default api;
