import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, BackHandler } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StoreContext } from '../context/StoreContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

const Detail = NativeStack => {
  const { title, price, rating, description, image } = NativeStack.route.params;
  const { addFavorite, state, changeScreen ,addToCart} = useContext(StoreContext)
  const [isFavorite, setIsFavorite] = useState(false)
  const [arrayProduct, setArrayProducts] = useState([])


  useEffect(()=>{
    storeCart(JSON.stringify(state.cartArray))
  },[state.cartArray])

  useEffect(() => {
    changeScreen("DetailScreen")
    const backAction = () => {
      changeScreen("HomeScreen")
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();

  }, [])

  useEffect(() => {
    setArrayProducts(state.favoritesArray)
    storeData(JSON.stringify(state.favoritesArray))
    const isFavorite = state.favoritesArray.some(product => product.id === NativeStack.route.params.id)
    setIsFavorite(isFavorite)
  }, [state.favoritesArray])

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('saved', value);
    } catch (e) {
    }
  };
  const storeCart = async (value) => {
    try {
      await AsyncStorage.setItem('cart', value);
    } catch (e) {
    }
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ height: '85%' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              changeScreen("HomeScreen")
              NativeStack.navigation.goBack()
            }}>
            <Feather
              name="chevron-left"
              size={32}
              color="#000"

            />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#000' }}>
            Details
          </Text>

          <TouchableOpacity>
            <Feather name='shopping-bag' size={32} color={"#000"} />
            <View style={styles.containerCardItems}>
              <Text style={styles.textCardItem}>
                {
                  state.cartArray.length
                }
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            height: '40%',
            borderRadius: 10,
            margin: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: image,
            }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity
            onPress={() => {
              const objectProudct = NativeStack.route.params
              const isAdded = arrayProduct.filter(product => product.id === objectProudct.id)
              if (isAdded.length) {
                Snackbar.show({
                  text: "El producto ya esta en favoritos. ⚠️"
                })
              } else {
                Snackbar.show({
                  text: "Se agrego el producto a favoritos. ✅"
                })
                addFavorite(objectProudct)
              }
            }}
            style={{
              position: 'absolute',
              top: 10,
              right: 0,
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 10.32,
              elevation: 16,
            }}>
            {
              isFavorite ?
                <Ionicons name="heart" size={24} color="#000" />
                :
                <Feather name="heart" size={24} color="#000" />
            }

          </TouchableOpacity>
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{ fontSize: 28, margin: 16, fontWeight: 'bold', color: '#000' }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 16,
            fontWeight: 'normal',
            color: '#000'
          }}>{`⭐${rating.rate}/5 ${rating.count} reviews`}</Text>
        <Text
          numberOfLines={6}
          ellipsizeMode="tail"
          style={{
            fontSize: 18,
            marginHorizontal: 16,
            marginTop: 20,
            fontWeight: 'normal',
            color: '#666666',
          }}>
          {description}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '15%',
          width: '100%',
          borderTopWidth: 1,
          bottom: 0,
          borderTopColor: '#CCCCCC',
          position: 'absolute',
          paddingHorizontal: 28,
          color: '#000'
        }}>
        <View>
          <Text style={{ fontSize: 18, color: '#000' }}>Price</Text>
          <Text
            style={{ fontSize: 28, fontWeight: 'bold', color: '#000' }}>{`S/ ${price}`}</Text>
        </View>

        <TouchableOpacity
          onPress={() => { 
            const isAdded = state.cartArray.some( product => product.id === NativeStack.route.params.id )
            if(!isAdded){
              addToCart(NativeStack.route.params)
            }else{
              Snackbar.show(
                {
                  text: 'El producto ya esta en el carrito.'
                }
              )
            }
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            borderRadius: 10,
            paddingHorizontal: 24,
            paddingVertical: 8,
          }}>
          <Feather name="shopping-bag" size={32} color="#fff" />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '800',
              marginLeft: 8,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;




const styles = StyleSheet.create({

  containerCardItems: {
    backgroundColor: '#000',
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0
  },
  containerHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: "100%",
    padding: 10
  },
  textCardItem: {
    color: '#fff',
    fontWeight: 'bold'
  },

})