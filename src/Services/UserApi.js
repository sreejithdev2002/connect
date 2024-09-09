import { userInstance } from "../Axios/axiosInstance";

export const RegisterApi = (value) => {
  return userInstance.post("/register", { ...value });
};

export const LoginApi = (value) => {
  return userInstance.post("/login", { ...value });
};
