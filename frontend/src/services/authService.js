import api from './api';

export const authService = {
  async register(userData) {
    const res = await api.post('/auth/register', userData);
    if (res.data.token) {
      localStorage.setItem('drb_auth_token', res.data.token);
      localStorage.setItem('drb_auth_user', JSON.stringify(res.data.user));
    }
    return res.data;
  },

  async login(credentials) {
    const res = await api.post('/auth/login', credentials);
    if (res.data.token) {
      localStorage.setItem('drb_auth_token', res.data.token);
      localStorage.setItem('drb_auth_user', JSON.stringify(res.data.user));
    }
    return res.data;
  },

  async getMe() {
    const res = await api.get('/auth/me');
    return res.data;
  },

  logout() {
    localStorage.removeItem('drb_auth_token');
    localStorage.removeItem('drb_auth_user');
  },

  getCurrentUser() {
    try {
      const stored = localStorage.getItem('drb_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      localStorage.removeItem('drb_auth_user');
      return null;
    }
  },

  getToken() {
    return localStorage.getItem('drb_auth_token');
  },
};

export default authService;
