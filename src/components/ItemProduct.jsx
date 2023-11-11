import React from 'react'
import { Image, Text, View } from 'react-native'

const ItemProduct = ({img,title, price}) => {
  return (
    <View style={{width:"50%"}}>

        <Image width={140} height={300}
        source={{uri: img}} />
        <Text style={{color:'#000', fontSize:15, fontWeight:'bold'}}>
            {title}
        </Text>
        <Text style={{color:'#000', fontSize:15, fontWeight:'bold'}}>
            {price}
        </Text>
    </View>
  )
}

export default ItemProduct
