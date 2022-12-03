// @ts-ignore
import Cookies from "js-cookie";

const TokenKey = "admin-token";

export const getToken = () => {
  return Cookies.get(TokenKey);
};
