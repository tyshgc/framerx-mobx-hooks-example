/**
 * useStore
 * storeの参照を行うhooks
 */
import { useContext } from "react";
import { useObserver } from "mobx-react";

export type ISelector<TStore, TSelection> = (store: TStore) => TSelection;

export default function useStore<TStore, TSelection>(
  context: React.Context<TStore>,
  selector: ISelector<TStore, TSelection>
) {
  const store = useContext(context);
  if (!store) {
    throw new Error("need to wrapp context!!");
  }

  return useObserver(() => selector(store));
}
