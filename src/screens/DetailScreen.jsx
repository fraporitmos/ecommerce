import React, {useContext, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { StoreContext } from '../context/StoreContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detail = NativeStack => {
  const {title, price, rating, description, image} = NativeStack.route.params;
  const { addFavorite, state } = useContext(StoreContext)


  useEffect(()=>{
    storeData(JSON.stringify(state.favoritesArray))
  },[state.favoritesArray])

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('saved', value);
    } catch (e) {
    }
  };

  return (
    <View style={{flex: 1, backgroundColor:'#fff'}}>
      <View style={{height: '85%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              NativeStack.navigation.goBack()
            }}>
            <Icon 
              name="chevron-left" 
              size={32} 
              color="#000"
          
            />
          </TouchableOpacity>
          <Text style={{fontSize: 26, fontWeight: 'bold', color: '#000'}}>
            Details
          </Text>

          <TouchableOpacity>
          <Icon name='shopping-bag' size={32} color={"#000"} />
          <View style={styles.containerCardItems}>
            <Text style={styles.textCardItem}>0</Text>
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
          onPress={()=>{    addFavorite(NativeStack.route.params)          }}
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
            <Icon name="heart" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{fontSize: 28, margin: 16, fontWeight: 'bold', color:'#000'}}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 16,
            fontWeight: 'normal',
            color:'#000'
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
          color:'#000'
        }}>
        <View>
          <Text style={{fontSize: 18,   color:'#000'}}>Price</Text>
          <Text
            style={{fontSize: 28, fontWeight: 'bold',  color:'#000'}}>{`S/ ${price}`}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {    }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            borderRadius: 10,
            paddingHorizontal: 24,
            paddingVertical: 8,
          }}>
          <Icon name="shopping-bag" size={32} color="#fff" />
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