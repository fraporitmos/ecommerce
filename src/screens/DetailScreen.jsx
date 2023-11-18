import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const DetailScreen = NativeStack => {
    const product = NativeStack.route.params
  

  return (
    <View>
      <Text>{product.title}</Text>

    </View>
  )
}

export default DetailScreen
