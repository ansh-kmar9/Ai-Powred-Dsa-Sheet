import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Auth API
export const authAPI = {
  getCurrentUser: () => api.get("/auth/user"),
  logout: () => api.post("/auth/logout"),
  verifyToken: (token) =>
    api.post(
      "/auth/verify",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ),
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
