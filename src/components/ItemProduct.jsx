import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StoreContext } from '../context/StoreContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemProduct = ({ img, title, price, nav, object }) => {
  const { state, removeFavorite } = useContext(StoreContext)
  useEffect(() => {
    storeData(JSON.stringify(state.favoritesArray))
  }, [state.favoritesArray])

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('saved', value);
    } catch (e) {
    }
  };

  return (
    <View style={styles.containerCard}>

      <TouchableOpacity onPress={() => { 
          state.currentScreen != 'FavoriteScreen' ? nav.navigation.navigate("DetailScreen", object) : null
       }}>
        <Image style={styles.imageCard}
          source={{ uri: img }} />
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Eliminar favorito', 'Seguro que deseas quitar este elemento de favoritos?', [
              {
                text: 'Cancelar',
                onPress: () => null,
                style: 'cancel',
              },
              {
                text: 'Si', onPress: () => removeFavorite(object)
              },
            ]);
          }}
          style={{
            position: 'absolute',
            right: 4, display: state.currentScreen === 'FavoriteScreen' ? 'flex' : 'none'
          }}>
          <Ionicons name="trash" size={24} color="#000" />
        </TouchableOpacity>
        <Text
          style={styles.textProduct}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {title}
        </Text>
        <Text style={styles.textPrice}>

          {`S/${price}`}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ItemProduct


const styles = StyleSheet.create({
  containerCard: {
    width: "45%",
    height: 220,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 8
    
  },

  imageCard: {
    width: 160,
    height: 160,
    resizeMode: 'contain'
  },
  containerSaved: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 16,
  },
  textProduct: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4
  },
  textPrice: {
    color: '#000',
    fontSize: 18,
  },

})