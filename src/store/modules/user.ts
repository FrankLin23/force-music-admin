import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { createToken, me } from "@/api/user";
import {
  getCurrentUser,
  removeCurrentUser,
  removeToken,
  setCurrentUser,
  setToken,
} from "@/utils/auth";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("");
  const currentUser = ref(getCurrentUser());

  const nicknameFirstWord = computed(() => {
    return currentUser && currentUser.nickname
      ? currentUser.nickname.slice(0, 1)
      : "";
  });

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
          console.log(res.data);
          currentUser.value = res.data;
          setCurrentUser(res.data);
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  };

  const logOut = async () => {
    removeToken();
    removeCurrentUser();
    token.value = "";
    currentUser.value = null;
  };

  return {
    token,
    user: currentUser,
    nicknameFirstWord,
    login,
    fetchCurrentUser,
    logOut,
  };
});
