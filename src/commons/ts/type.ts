import { User } from "./interface"

type State = {
  user: User | null
}

type Action = {
  type: string
  payload: User | null
}

type Dispatch = (action: Action) => void;

type StateContextProviderProps = {
  children: JSX.Element
}

export type {
  State,
  Action,
  Dispatch,
  StateContextProviderProps
}

