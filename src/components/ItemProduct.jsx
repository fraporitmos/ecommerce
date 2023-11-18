import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { StoreContext } from '../context/StoreContext';


const ItemProduct = ({ img, title, price, nav, object }) => {


  return (
    <View style={styles.containerCard}>
      <TouchableOpacity onPress={() => { nav.navigation.navigate("DetailScreen", object) }}>
        <Image style={styles.imageCard}
          source={{ uri: img }} />
     

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

  }
})