import axios from "axios";

export const removeFromCartService = async (productId, encodedToken) => {
  return await axios.delete(`${process.env.BASE_URL || ''}/api/user/cart/${productId}`, {
    headers: { authorization: encodedToken },
  });
};
