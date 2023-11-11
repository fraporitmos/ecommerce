import React from 'react'
import { Button, SafeAreaView, StatusBar, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import NativeStack from './src/navigation/NativeStack'


const App = () => {
  return (
      <SafeAreaView 
      style={{backgroundColor: '#FFFFFF' ,flex:1}}
      >
      <StatusBar 
        backgroundColor={"#000"}
        barStyle={'light-content'}
      />
      <NavigationContainer>
          <NativeStack/>
      </NavigationContainer>


    </SafeAreaView>

  )
}

export default App
