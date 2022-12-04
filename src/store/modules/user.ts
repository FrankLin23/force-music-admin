import { defineStore } from "pinia";
import { ref } from "vue";
import { createToken, me } from "@/api/user";
import { getCurrentUser, setCurrentUser, setToken } from "@/utils/auth";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("");
  const user = ref(getCurrentUser());

  const login = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      createToken(username.trim(), password)
        .then((res) => {
          token.value = res.data.token;
          setToken(res.data.token);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const fetchCurrentUser = () => {
    return new Promise((resolve, reject) => {
      me()
        .then((res) => {
          user.value = res.data;
          setCurrentUser(res.data);
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  };

  return { token, user, login, fetchCurrentUser };
});
