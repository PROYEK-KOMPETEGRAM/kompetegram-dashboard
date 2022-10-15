import { createContext } from "react";
import { Action, State, Dispatch } from "../ts/type";

const StateContext = createContext<{ 
  state: State; dispatch: Dispatch } | undefined>(undefined);

const initialState = {
  user: null
}

const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: action.payload
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      throw new Error("Unhandle action")
  }
}

export {
  StateContext,
  initialState,
  stateReducer
}