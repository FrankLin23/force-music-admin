import request from "@/utils/request";

export const createToken = (username: string, password: string) => {
  return request.post("/user/login", { username, password });
};

export const me = () => {
  return request.get("/user/me");
};
