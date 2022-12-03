import instance from "@/utils/request";

export const createToken = (username: string, password: string) => {
  return instance.post("/token", { username, password });
};
