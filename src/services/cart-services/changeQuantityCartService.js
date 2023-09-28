import axios from "axios";

export const changeQuantityCartService = async (
  productId,
  encodedToken,
  type
) => {
  return await axios.post(
    `${process.env.BASE_URL || ''}/api/user/cart/${productId}`,

    {
      action: {
        type,
      },
    },
    {
      headers: { authorization: encodedToken },
    }
  );
};
