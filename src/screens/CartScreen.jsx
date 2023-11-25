import React, { useContext, useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import ItemCart from '../components/ItemCart'
import { StoreContext } from '../context/StoreContext'
import ButtonPrimary from '../components/ButtonPrimary'

const IGV = 0.18
const CartScreen = () => {

  const { state ,removeToCart} = useContext(StoreContext)

  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    const subtotal = state.cartArray.reduce((subtotal, product) => subtotal + product.price, 0).toFixed(2)
    setSubtotal(subtotal)
  }, [state.cartArray])

  return (
    <View style={styles.containerCartScreen}>
      <Text style={styles.titleScreen}>MyCart</Text>
      <View style={{ height: '60%' }}>
        {
          state.cartArray.length > 0
            ?
            <FlatList
              data={state.cartArray}
              style={{ flexDirection: 'column', height: '50%' }}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => {
                return (
                  <ItemCart
                    img={item.image}
                    title={item.title}
                    price={item.price}
                    objectProduct={item}
                  />
                )
              }} />
            : <Text>Cargando...</Text>
        }
      </View>
      {
        state.cartArray.length > 0 ?
          <View style={{ height: '40%', marginTop:18 }}>
            <View style={styles.containerSubtotal}>
              <Text style={styles.titleSubtotal}>
                Sub-total
              </Text>
              <Text style={styles.priceSubtotal}>
                {
                  subtotal
                }
              </Text>
            </View>
            <View style={styles.containerSubtotal}>
              <Text style={styles.titleSubtotal}>
                IGV
              </Text>
              <Text style={styles.priceSubtotal}>
                {IGV}
              </Text>
            </View>
            <View style={styles.containerSubtotal}>
              <Text style={styles.titleSubtotal}>
                Shipping fee
              </Text>
              <Text style={styles.priceSubtotal}>
                0.05
              </Text>
            </View>

            <View
              style={styles.separtor}
            />

            <View style={styles.containerSubtotal}>
              <Text style={styles.textTotal}>
                Total
              </Text>
              <Text style={styles.textTotal}>
                S/  {
                  ((subtotal - subtotal * 0.05) - subtotal * IGV).toFixed(2)
                }
              </Text>
            </View>

            <View style={styles.containerButton}>
              <ButtonPrimary
                onPress={() => { }}
                textButton="Checkout"

              />
            </View>
          </View>
          : <></>
      }

    </View>
  )
}

export default CartScreen


const styles = StyleSheet.create({
  containerCartScreen: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,

  },
  separtor: {
    height: 0.8,
    width: '100%',
    marginTop: 24,
    backgroundColor: '#000',
  },
  titleScreen: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000'
  },
  containerSubtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleSubtotal: {
    fontSize: 18,
    color: '#000'
  },
  priceSubtotal: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600'
  },
  textTotal: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  containerButton: {
    width: '100%',
    height: 80,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#b3b3b3',
    borderTopWidth: 1,
    paddingTop: 6,
    position: "absolute",
    bottom: 30,
  }
})