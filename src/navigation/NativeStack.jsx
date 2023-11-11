import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import SignIn from '../screens/SignIn';
import BottonTab from './BottomTab'
const Stack = createNativeStackNavigator();

function NativeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottonTab"
         component={BottonTab} />

    </Stack.Navigator>
  );
}

export default NativeStack