import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ItemProduct from '../components/ItemProduct'
import Icon from 'react-native-vector-icons/Feather';
import ButtonPrimary from '../components/ButtonPrimary';
import { StoreContext } from '../context/StoreContext';

const HomeScreen = NativeStack => {
  const [products, setProducts] = useState([])
  const [enabledfilter, setEnableFilter] = useState('woman')


  useEffect(() => {
    
    axios.get("https://fakestoreapi.com/products")
      .then((resp) => setProducts(resp.data))
  }, [])

  return (
    <>
      {/* Header Screen */}
      <View style={styles.containerHeader}>
        <Text style={styles.titleHeader}>
          Discover
        </Text>
        <TouchableOpacity>
          <Icon name='shopping-bag' size={32} color={"#000"} />
          <View style={styles.containerCardItems}>
            <Text style={styles.textCardItem}>0</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Search Products */}
      <View style={styles.containerSearch}>
        <View style={styles.containerSearchInput}>
          <Icon name='search' size={28} color={"#000"} />
          <TextInput
            placeholder='Search anything'
            placeholderTextColor={'#313131'}
            cursorColor={'#000'}
            selectionColor={'#e9e9e9'}
            keyboardType='default'
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.containerIconFilter}>
          <Icon name='filter' size={28} color={"#fff"} />
        </TouchableOpacity>
      </View>
      {/* Category Products */}
      <View style={{ height: 80 }}>
        <ScrollView horizontal={true} style={styles.containerCategory}>
          <ButtonPrimary
            onPress={() => { setEnableFilter("all") }}
            textButton={"All"}
            stylesAdd={{
              container: {
                width: 80,
                height: 40,
                backgroundColor: enabledfilter === 'all' ? '#000' : '#F2F2F2'
              },
              textButton: {
                color: enabledfilter === 'all' ? '#fff' : '#000'
              }
            }}
          />
          <ButtonPrimary
            textButton={"men"}
            onPress={() => { setEnableFilter("men") }}
            stylesAdd={{
              container: {
                width: 80,
                marginLeft: 12,
                height: 40,
                backgroundColor: enabledfilter === 'men' ? '#000' : '#F2F2F2'
              },
              textButton: {
                color: enabledfilter === 'men' ? '#fff' : '#000'
              }
            }}
          />
          <ButtonPrimary
            textButton={"Women"}
            onPress={() => { setEnableFilter("women") }}
            stylesAdd={{
              container: {
                width: 80,
                marginLeft: 12,
                height: 40,
                backgroundColor: enabledfilter === 'women' ? '#000' : '#F2F2F2'
              },
              textButton: {
                color: enabledfilter === 'women' ? '#fff' : '#000'
              }
            }}
          />
          <ButtonPrimary
            textButton={"Kids"}
            onPress={() => { setEnableFilter("kids") }}
            stylesAdd={{
              container: {
                width: 80,
                marginLeft: 12,
                height: 40,
                backgroundColor: enabledfilter === 'kids' ? '#000' : '#F2F2F2'
              },
              textButton: {
                color: enabledfilter === 'kids' ? '#fff' : '#000'
              }
            }}
          />

          <ButtonPrimary
            textButton={"Other"}
            onPress={() => { setEnableFilter("other") }}
            stylesAdd={{
              container: {
                width: 80,
                marginLeft: 12,
                height: 40,
                marginRight: 24,
                backgroundColor: enabledfilter === 'other' ? '#000' : '#F2F2F2'
              },
              textButton: {
                color: enabledfilter === 'other' ? '#fff' : '#000'
              }
            }}
          />
        </ScrollView>
      </View>

      <View style={{ backgroundColor: 'white', flex: 1 }}>
        {
          products.length > 0
            ?
            <FlatList
              style={{ padding: 10 }}
              data={products}
              numColumns={2}
              renderItem={({ item }) => {
                return (
                  <ItemProduct
                    img={item.image}
                    title={item.title}
                    price={item.price}
                    nav={NativeStack}
                    object={item}
                  />
                )
              }} />
            : <Text>Cargando...</Text>
        }
      </View>
    </>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
  titleHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000'
  },
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
  containerSearch: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerSearchInput: {
    width: '75%',
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 4
  },
  textInput: {
    fontSize: 18,
    marginLeft: 8,
    width: '75%'
  },
  containerIconFilter: {
    width: '15%',
    backgroundColor: '#000',
    marginLeft: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  containerCategory: {
    backgroundColor: '#fff',
    padding: 12,
    flex: 1,
    height: 10,
  }
})
