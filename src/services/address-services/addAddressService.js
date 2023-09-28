import axios from "axios";

export const addAddressService = async (address, token) => {
  return await axios.post(
    `${process.env.BASE_URL || ''}/api/user/address/`,
    { address },
    { headers: { authorization: token } }
  );
};
