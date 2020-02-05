import { Stores } from "./index";
const { Counter } = Stores;

class Actions {
  countUp() {
    Counter.countUp();
  }
}

export default new Actions();
export type IActions = Actions;
