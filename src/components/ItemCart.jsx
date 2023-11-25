import React, { useContext, useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StoreContext } from '../context/StoreContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemCart = ({img, title,price,objectProduct}) => {

    const { state,removeToCart} = useContext(StoreContext)

  useEffect(()=>{
    storeCart(JSON.stringify(state.cartArray))
  },[state.cartArray])

    const storeCart = async (value) => {
        try {
          await AsyncStorage.setItem('cart', value);
        } catch (e) {
        }
      };

    return (
        <View style={styles.containerCard}>
            <View>
                <Image style={styles.imageCard}
                    source={{ uri: img }} />
            </View>
            <View>
                <View style={styles.containerInfo}>
                    <Text 
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    style={styles.titleProduct}>{title}</Text>

                    <Text style={styles.titlePrice}>Precio: S/{price}</Text>
                </View>
            </View>
            <View style={styles.containerAcctions}>
                <TouchableOpacity 
                onPress={()=>{
                    Alert.alert('Eliminar producto', 'Seguro que deseas eliminar este producto del carrito?', [
                        {
                          text: 'Cancelar',
                          onPress: () => null,
                          style: 'cancel',
                        },
                        {
                          text: 'Si', onPress: () => removeToCart(objectProduct)
                        },
                      ]);

                }}
                style={styles.containerIcon}>
                    <Ionicons name="trash" color={"#F60000"} size={24} />
                </TouchableOpacity>
                <View style={styles.contianerLength}>
                    <TouchableOpacity style={{borderColor:'#000', borderRadius: 4, borderWidth:1, height:25}}>
                           <Ionicons name="add" color={"#000000"} size={20}  />
                    </TouchableOpacity>
                    <Text style={{ fontSize:24, fontWeight:'bold', marginHorizontal:12}}>
                        1
                    </Text>
                    <TouchableOpacity style={{borderColor:'#000', borderRadius: 4, borderWidth:1,height:25}}>
                           <Ionicons name="remove-sharp" color={"#000000"} size={20} />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ItemCart


const styles = StyleSheet.create({
    containerCard: {
        flexDirection: 'row',
        width:'100%',
        height:100,
        borderRadius:10,
        padding:8,
        backgroundColor:'#F2F2F2',
        marginTop:24
    },
    containerInfo: {
        flexDirection: 'column',
        paddingVertical: 4,
        justifyContent: 'space-between',
        height: '100%',
        marginLeft: 12
    },
    imageCard: {
        width: 100,
        height: 90,
        resizeMode: 'contain',
        borderColor: '#C4C3C6',
        borderWidth: 1,
        borderRadius: 10

    },
    titleProduct: {
        fontSize: 16,
        color: '#000',
        fontWeight: '400',
        width:150
        
    },
    titlePrice: {
        fontSize: 14,
        color: '#000',
        fontWeight: '900'
    },
    containerAcctions:{
        justifyContent:'space-between',
    },
    contianerLength:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    containerIcon:{
        alignItems:'flex-end'
    }
})