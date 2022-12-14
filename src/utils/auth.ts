import Cookies from "js-cookie";

const TokenKey = "admin-token";
const UserKey = "current-user";

const defaultUser = {
  username: null,
  nickname: null,
  roles: [],
};

export const getToken = () => {
  return Cookies.get(TokenKey);
};

export const setToken = (token: string) => {
  return Cookies.set(TokenKey, token);
};

export const removeToken = () => {
  Cookies.remove(TokenKey);
};

export const setCurrentUser = (currentUser: any) => {
  return Cookies.set(UserKey, JSON.stringify(currentUser));
};

export const getCurrentUser = () => {
  const user = Cookies.get(UserKey);
  return user === undefined ? defaultUser : JSON.parse(user);
};

export const removeCurrentUser = () => {
  Cookies.remove(UserKey);
};
