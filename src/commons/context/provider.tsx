import { useContext, useReducer } from "react";
import { initialState, StateContext, stateReducer } from ".";
import { StateContextProviderProps } from "../ts/type";

const StateContextProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const value = { state, dispatch };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}

const useStateContext = () => {
  const context = useContext(StateContext);

  if (context) {
    return context;
  }

  throw new Error("Cannot be used outside Provider");
};

export {
  useStateContext,
  StateContextProvider
}