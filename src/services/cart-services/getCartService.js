import axios from "axios";

export const getCartService = async (encodedToken) =>
  await axios.get(`${process.env.BASE_URL || ''}/api/user/cart`, {
    headers: { authorization: encodedToken },
  });
