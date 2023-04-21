import React, { createContext, FC, ReactNode } from "react";

import { DEFAULT_STATE } from "./constants";
import { StateType } from "./types";

const nullFunction = (_data: StateType): void => {
  return;
};

const StateContext = createContext<StateType>(DEFAULT_STATE);
const DispatchContext = createContext(nullFunction);

type Props = {
  children: ReactNode;
};

const Provider: FC<Props> = ({ children }: Props) => {
  const [data, setData] = React.useState<StateType>(DEFAULT_STATE);

  return (
    <StateContext.Provider value={data}>
      <DispatchContext.Provider value={setData}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { StateContext, Provider, DispatchContext };
