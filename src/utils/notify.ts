import { Notify } from "quasar";

const success = (message: string) => {
  Notify.create({
    type: "positive",
    message,
    position: "top",
  });
};

const error = (message: string) => {
  Notify.create({
    type: "negative",
    message,
    position: "top",
  });
};

export default { success, error };
