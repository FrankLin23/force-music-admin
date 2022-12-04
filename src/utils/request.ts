import axios, { AxiosResponse } from "axios";
import { useUserStore } from "@/store/modules/user";
import notify from "@/utils/notify.js";

const tokenPrefix = "Bearer ";

const request = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

request.interceptors.request.use(
  (config) => {
    const store = useUserStore();
    if (store.token) {
      // @ts-ignore
      config.headers["Authorization"] = tokenPrefix + store.token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    if (response.data.code) {
      handleErrorResponse(response);
      return Promise.reject(response.data);
    }
    return response.data;
  },
  (error) => {
    if (!error.response) {
      notify.error("请求不成功，请联系后台管理员");
    }
    handleErrorResponse(error.response);
    return Promise.reject(error);
  }
);

const handleErrorResponse = (response: AxiosResponse) => {
  if (response.status === 401 || response.status === 403) {
    //store.dispatch("user/logout").then(() => window.location.reload());
  }

  if (response.data instanceof Array) {
    response.data.forEach((item: any) => {
      notify.error(item.message);
    });
  } else {
    notify.error(response.data.message);
  }
};

export default request;
