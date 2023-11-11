import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'


const ButtonPrimary = ({ img, textButton, onPress, stylesAdd= {} }) => {

  var styleDefultPrimary = StyleSheet.create({
      container:{
        backgroundColor: '#000000',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,

      },
      textButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
      },
  })


  var styles = StyleSheet.create({
    container:{
      ...styleDefultPrimary.container,
      ...stylesAdd.container
    },
    textButton: {
      ...styleDefultPrimary.textButton,
      ...stylesAdd.textButton
    },

  })
  return (
      <TouchableOpacity 
      onPress={onPress}
      style={styles.container}
      >
        {
          img && <Image  width={24} height={24} source={{
            uri: img
          }} />
        }
        <Text style={styles.textButton}>{textButton}</Text>
      </TouchableOpacity>
  )

  
}


export default ButtonPrimary
