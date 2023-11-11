import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import ItemProduct from '../components/ItemProduct'

const HomeScreen = () => {
 const [products, setProducts] = useState([])
  useEffect( ()=>{
    axios.get("https://fakestoreapi.com/products")
    .then( (resp) => setProducts(resp.data))
  }, [])
  return (
    <View style={{backgroundColor:'white', flex:1}}>
      {
        products.length >0 ?
        <FlatList 
        style={{padding:10}}
        data={products}
        numColumns={2}
        renderItem={ ({item}) => {
          return (
            <ItemProduct 
              img = {item.image}
              title={item.title}
              price={item.price}
            />
          )
        }} />
        : <Text>Cargando...</Text>
      }

    </View>
  )
}

export default HomeScreen
