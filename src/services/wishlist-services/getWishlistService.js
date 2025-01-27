import axios from "axios";

export const getWishlistService = async (encodedToken) =>
  await axios.get(`${process.env.BASE_URL || ''}/api/user/wishlist`, {
    headers: { authorization: encodedToken },
  });
