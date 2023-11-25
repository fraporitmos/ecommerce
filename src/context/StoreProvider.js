import { useEffect, useReducer } from "react";
import {initialState,StoreContext} from './StoreContext'
import { StoreReducer } from "./StoreReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(StoreReducer, initialState);
    useEffect( () => {
       getData()
    }, [])

  const getData = async () => {
    try {
      const arraySavedString = await AsyncStorage.getItem('saved');
      if (arraySavedString !== null) {
        const favoriteObjects = arraySavedString !=null ? JSON.parse(arraySavedString) : [];
        initalFavorites(favoriteObjects);
    }
    } catch (e) {
    }
  };

    const initalFavorites = (objectProduct) => {
        dispatch({type: 'INITIAL_DATA', payload: objectProduct})
    }

    const addFavorite = (objectProduct) => {
        dispatch({type: 'ADD_FAVORITE', payload: objectProduct})
    }

    const changeScreen = (newScreen) => {
      dispatch({type: 'CHANGE_SCREEN', payload:newScreen })
    }

    const removeFavorite = (objectProduct) => {
        dispatch({type:'REMOVE_FAVORITE', payload: objectProduct})
    }

    return (
        <StoreContext.Provider
         value={{state,addFavorite,removeFavorite,changeScreen}}>
            {children}
        </StoreContext.Provider>

    )
}