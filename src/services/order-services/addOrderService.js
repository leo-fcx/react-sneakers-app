import axios from "axios";

export const addOrderService = async (order, token) => {
  return await axios.post(
    `${process.env.BASE_URL || ''}/api/user/orders`,
    { ...order },
    { headers: { authorization: token } }
  );
};
