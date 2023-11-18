import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemProduct from '../components/ItemProduct';
import { StoreContext } from '../context/StoreContext';

const FavoritesScreen = () => {
  const {state} = useContext(StoreContext)

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
    {
      state.favoritesArray.length > 0
        ?
        <FlatList
          style={{ padding: 10 }}
          data={state.favoritesArray}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <ItemProduct
                img={item.image}
                title={item.title}
                price={item.price}
                object={item}
              />
            )
          }} />
        : <Text>Cargando...</Text>
    }
  </View>
  )
}

export default FavoritesScreen
