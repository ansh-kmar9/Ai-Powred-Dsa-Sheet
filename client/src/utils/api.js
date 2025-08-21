import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Add request interceptor to include JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("API Request - Token exists:", !!token);
    console.log("API Request - URL:", config.url);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("API Request - Authorization header set");
    } else {
      console.log("API Request - No token found in localStorage");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token might be expired, remove it
      localStorage.removeItem("token");
      // Optionally redirect to login
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  getCurrentUser: () => api.get("/auth/user"),
  logout: () => api.post("/auth/logout"),
  verifyToken: () => api.post("/auth/verify"),
};

// Sheets API
export const sheetsAPI = {
  getAllSheets: () => api.get("/api/sheets"),
  getSheet: (sheetName) => api.get(`/api/sheets/${sheetName}`),
  getSheetStats: (sheetName) => api.get(`/api/sheets/${sheetName}/stats`),
};

// Progress API
export const progressAPI = {
  getOverallProgress: () => api.get("/api/progress/overview"),
  getSheetProgress: (sheetName) => api.get(`/api/progress/${sheetName}`),
  toggleQuestionStatus: (sheetName, questionId) =>
    api.post(`/api/progress/${sheetName}/${questionId}`),
  resetSheetProgress: (sheetName) => api.delete(`/api/progress/${sheetName}`),
};

export default api;
