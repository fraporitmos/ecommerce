import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import NativeStack from './src/navigation/NativeStack'
import { StoreProvider } from './src/context/StoreProvider'

const App = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: '#FFFFFF', flex: 1 }}
    >
      <StatusBar
        backgroundColor={"#000"}
        barStyle={'light-content'}
      />
      <StoreProvider>
        <NavigationContainer>
          <NativeStack />
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaView>

  )
}

export default App
