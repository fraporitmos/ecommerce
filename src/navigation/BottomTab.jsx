import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Feather';
import HomeDetailStack from './HomeDetailStack';

const Tab = createBottomTabNavigator();

function ButtomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          borderTopColor: '#fff'
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeDetailScreen"
        component={HomeDetailStack}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 16, color: '#000', fontWeight: 'bold' },
          tabBarIcon: () => <Icon name="home" size={30} color="#000" />
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Saved",
          tabBarLabelStyle: { fontSize: 16, color: '#000', fontWeight: 'bold' },
          tabBarIcon: () => <Icon name="heart" size={30} color="#000" />
        }}
      />

      <Tab.Screen
        name="CardScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarLabelStyle: { fontSize: 16, color: '#000', fontWeight: 'bold' },
          tabBarIcon: () => <Icon name="shopping-bag" size={30} color="#000" />
        }}
      />

      <Tab.Screen
        name="SettingScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: { fontSize: 16, color: '#000', fontWeight: 'bold' },
          tabBarIcon: () => <Icon name="settings" size={30} color="#000" />
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtomTab