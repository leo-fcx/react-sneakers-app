import axios from "axios";

export const addToWishlistService = async (product, encodedToken) => {
  return await axios.post(
    `${process.env.BASE_URL || ''}/api/user/wishlist`,
    { product: { ...product } },
    {
      headers: { authorization: encodedToken },
    }
  );
};
