/**
 * Counter Store
 */
import { observable, action } from "mobx";

export default class CounterStore {
  @observable count: number = 0;

  @action countUp() {
    this.count += 1;
  }
}

export type ICounterStore = CounterStore;
