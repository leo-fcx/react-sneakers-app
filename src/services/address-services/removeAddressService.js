import axios from "axios";

export const removeAddressService = async (address, token) => {
  return await axios.delete(`${process.env.BASE_URL || ''}/api/user/address/${address._id}`, {
    headers: { authorization: token },
  });
};
