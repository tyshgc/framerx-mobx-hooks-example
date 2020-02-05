/**
 * 状態に関するhooks
 */
import { createContext } from "react";
import useStore, { ISelector } from "./useStore";
import CounterStore from "./CounterStore";

const Stores: IStores = {
  Counter: new CounterStore()
};
const context = createContext(Stores as IStores);
const StoreProvider = context.Provider;

function useGUIStore<TSelection>(selector: ISelector<IStores, TSelection>) {
  return useStore(context, selector);
}

export { Stores, useGUIStore, StoreProvider };
export interface IStores {
  Counter: CounterStore;
}
