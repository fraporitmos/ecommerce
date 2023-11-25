import { createContext } from "react";

export const initialState = {
    favoritesArray: [],
    currentScreen: 'HomeScreen'
};

export const StoreContext = createContext({initialState});