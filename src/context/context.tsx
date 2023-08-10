import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

const defaultState = { nombre: "", edad: "" };

export type Action = "addUser";
export type Dispatch = (action: Action) => void;
export type State = typeof defaultState;

const addUserContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function addUserReducer(state: State, action: Action) {
  switch (action) {
    case "addUser":
      return {
        nombre: state.nombre,
        edad: state.edad,
      };
  }
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(addUserReducer, defaultState);

  return (
    <addUserContext.Provider value={{ state, dispatch }}>
      {children}
    </addUserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(addUserContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
}
