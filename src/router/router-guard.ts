import router from "@/router/index";
import { getToken } from "@/utils/auth";

const whiteList = ["/login", "/404", "/403"];

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
