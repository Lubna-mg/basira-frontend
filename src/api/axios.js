import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
});

/**
 * Interceptor لإرسال التوكن مع كل طلب
 * يستخدم توكن واحد فعليًا لكن من مصادر مختلفة
 */
api.interceptors.request.use(
  (config) => {
    // 🔐 نبحث عن أي توكن متوفر
    const token =
      localStorage.getItem("adminToken") ||
      localStorage.getItem("centerToken") ||
      localStorage.getItem("doctorToken") ||
      localStorage.getItem("token"); // دعم قديم

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
