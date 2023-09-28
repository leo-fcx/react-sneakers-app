import axios from "axios";

export const clearCartService = async (token) => {
  return await axios.post(
    `${process.env.BASE_URL || ''}/api/user/cart/clearCart`,
    {},
    { headers: { authorization: token } }
  );
};
