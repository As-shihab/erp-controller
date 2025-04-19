import { createContext } from "react";

export const GlobalContext = createContext<any>({
  refreshTable: false,
  setRefrashTable: () => {},
});