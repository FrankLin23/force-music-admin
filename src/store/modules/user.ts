import { defineStore } from "pinia";
import { ref } from "vue";
import { createToken } from "@/api/user";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("");

  const login = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      createToken(username.trim(), password)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return { token, login };
});
