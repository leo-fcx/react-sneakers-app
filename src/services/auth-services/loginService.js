import axios from "axios";
export const loginService = async (email, password) => {
  
  return await axios.post(`${process.env.BASE_URL || ''}/api/auth/login`, { email, password });
};
