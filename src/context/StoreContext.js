import { createContext } from "react";

export const initialState = {
    favoritesArray: [],
    cartArray: [],
    currentScreen: 'HomeScreen'
};

export const StoreContext = createContext({initialState});