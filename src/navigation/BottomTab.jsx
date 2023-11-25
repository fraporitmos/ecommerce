import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Feather';
import HomeDetailStack from './HomeDetailStack';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../context/StoreContext';

const Tab = createBottomTabNavigator();

function ButtomTab() {
  const { changeScreen, state } = useContext(StoreContext)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          display: state.currentScreen === 'DetailScreen' ? 'none' : state.currentScreen === 'KeyboardOpen' ? 'none' : 'flex',
          borderTopColor: '#fff'
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeDetailScreen"
        component={HomeDetailStack}
        listeners={
          {
            tabPress: e => {
              changeScreen("HomeScreen")
            }
          }
        }
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 16, color: state.currentScreen === 'HomeScreen' ? '#fff' : '#000', fontWeight: 'bold' },
          tabBarItemStyle: { backgroundColor: state.currentScreen === 'HomeScreen' ? '#000' : '#fff', borderRadius: 16, margin: 2, padding: 4 },
          tabBarIcon: () => <Icon name="home" size={30} color={state.currentScreen === 'HomeScreen' ? "#fff" : '#000'} />
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"

        listeners={
          {
            tabPress: e => {
              changeScreen("FavoriteScreen")
            }
          }
        }
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Saved",
          tabBarLabelStyle: { fontSize: 16, color: state.currentScreen === 'FavoriteScreen' ? '#fff' : '#000', fontWeight: 'bold' },
          tabBarItemStyle: { backgroundColor: state.currentScreen === 'FavoriteScreen' ? '#000' : '#fff', borderRadius: 16, margin: 2, padding: 4 },
          tabBarIcon: () => <Icon name="heart" size={30} color={state.currentScreen === 'FavoriteScreen' ? "#fff" : '#000'} />

        }}
      />

      <Tab.Screen
        name="CartScreen"
        listeners={
          {
            tabPress: e => {
              changeScreen("CartScreen")
            }
          }
        }
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarLabelStyle: { fontSize: 16, color: state.currentScreen === 'CartScreen' ? '#fff' : '#000', fontWeight: 'bold' },
          tabBarItemStyle: { backgroundColor: state.currentScreen === 'CartScreen' ? '#000' : '#fff', borderRadius: 16, margin: 2, padding: 4 },
          tabBarIcon: () => <Icon name="shopping-bag" size={30} color={state.currentScreen === 'CartScreen' ? "#fff" : '#000'} />
        }}
      />

      <Tab.Screen
        name="SettingScreen"
        component={FavoritesScreen}
        listeners={
          {
            tabPress: e => {
              changeScreen("SettingsScreen")
            }
          }
        }
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: { fontSize: 16, color: state.currentScreen === 'SettingsScreen' ? '#fff' : '#000', fontWeight: 'bold' },
          tabBarItemStyle: { backgroundColor: state.currentScreen === 'SettingsScreen' ? '#000' : '#fff', borderRadius: 16, margin: 2, padding: 4 },
          tabBarIcon: () => <Icon name="settings" size={30} color={state.currentScreen === 'SettingsScreen' ? "#fff" : '#000'} />
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtomTab