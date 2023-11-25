import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import ItemProduct from '../components/ItemProduct'
import Icon from 'react-native-vector-icons/Feather';
import ButtonPrimary from '../components/ButtonPrimary';
import { StoreContext } from '../context/StoreContext';


const HomeScreen = NativeStack => {
  const [products, setProducts] = useState([])
  const [auxproducts, setAuxProducts] = useState([])
  const [enabledfilter, setEnableFilter] = useState('all')
  const { changeScreen } = useContext(StoreContext)

  const filterProducts = (arrayProducts, type) => {

    switch (type) {
      case 'men': {
        var arrayByMen = [...arrayProducts]
        var filterByMen = arrayByMen.filter(product => {
          return product.category === "men's clothing"
        })
        setProducts(filterByMen)
        break;
      }

      case 'woman': {
        var arrayByWoman = [...arrayProducts]
        var filterByWoman = arrayByWoman.filter(product => {
          return product.category === "women's clothing"
        })
        setProducts(filterByWoman)
        break;
      }



      default: {
        fetchProducts()
        break;
      }

    }
  }

  const searchProduct = (text) =>{
      var arrayBySearch = [...auxproducts]
      arrayBySearch = arrayBySearch.filter( product => {
        return product.title.toLowerCase().includes(text.toLowerCase())
      })
      setProducts(arrayBySearch)
  }

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProducts(resp.data)
        setAuxProducts(resp.data)
      })
  }
  useEffect(() => {
    fetchProducts()
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      changeScreen('KeyboardOpen')
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      changeScreen("HomeScreen")

    });
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };

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

            onChangeText={ text => searchProduct(text)}

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
            onPress={() => {
              setEnableFilter("all")
              fetchProducts()

            }}
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
            textButton={"Men"}
            onPress={() => {
              setEnableFilter("men")
              filterProducts(auxproducts, 'men')
            }}
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
            onPress={() => {
              setEnableFilter("women")
              filterProducts(auxproducts, 'woman')

            }}
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
            textButton={"Price"}
            onPress={() => { setEnableFilter("price") }}
            stylesAdd={{
              container: {
                width: 80,
                marginLeft: 12,
                height: 40,
                marginRight: 24,
                backgroundColor: enabledfilter === 'price' ? '#000' : '#F2F2F2'
              },
              textButton: {
                color: enabledfilter === 'price' ? '#fff' : '#000'
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
