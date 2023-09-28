import axios from "axios";

export const removeFromWishlistService = async (productId, encodedToken) => {
  return await axios.delete(`${process.env.BASE_URL || ''}/api/user/wishlist/${productId}`, {
    headers: { authorization: encodedToken },
  });
};
