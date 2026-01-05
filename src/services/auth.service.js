import api from "./api.js";

api.interceptors.request.use(
  (config) => {
    if (config.skipAuth) return config;

    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => Promise.reject(error)
)