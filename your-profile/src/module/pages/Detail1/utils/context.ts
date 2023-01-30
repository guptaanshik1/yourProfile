import { createContext, useContext } from "react";

export const Detail1Context = createContext(null);

export const useDetail1Context = () => {
  const context = useContext(Detail1Context);
  if (!context) {
    throw new Error("Detail1 context cannot be used outside its provider");
  }
  return context;
};
