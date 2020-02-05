import * as React from "react";
import { useGUIStore } from "../../mobx/";
import { ICounterStore } from "../../mobx/CounterStore";
import Actions, { IActions } from "../../mobx/Actions";

export function CounterContainer(render: IComponent) {
  const [count] = useGUIStore(stores => [stores.Counter.count]);
  const action = Actions.countUp;

  return <>{render({ count, action })}</>;
}

type IComponent = (render: IRenderProps) => React.ReactNode;
interface IRenderProps {
  count: ICounterStore["count"];
  action: IActions["countUp"];
}
