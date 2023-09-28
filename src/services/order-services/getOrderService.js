import axios from "axios";

export const getOrderService = async (token) => {
  return await axios.get(`${process.env.BASE_URL || ''}/api/user/orders`, {
    headers: { authorization: token },
  });
};
