import axios from "axios";

export const signupService = async (email, password, firstName, lastName) =>
  await axios.post(`${process.env.BASE_URL || ''}/api/auth/signup`, {
    email,
    password,
    firstName,
    lastName,
  });
