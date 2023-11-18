import { createContext } from "react";

export const initialState = {
    favoritesArray: []
};

export const StoreContext = createContext({initialState});