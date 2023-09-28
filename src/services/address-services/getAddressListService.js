import axios from "axios";

export const getAddressListService = async (token) => {
  return await axios.get(`${process.env.BASE_URL || ''}/api/user/address`, {
    headers: { authorization: token },
  });
};
