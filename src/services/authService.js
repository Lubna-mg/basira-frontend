import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1/admin/auth";

export const loginAdmin = async (email, password) => {
  const res = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });

  // حفظ التوكن
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("admin", JSON.stringify(res.data.admin));

  return res.data;
};

export const logoutAdmin = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
};
