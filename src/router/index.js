import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import { Wishlist, Home, Profile, SignIn, Splash, Details, Cart, Checkout, EditProfile, EditPassword, History, Register, Register2 } from '../pages';
import { BottomTabNavigation } from '../component';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return(
    <Tab.Navigator tabBar={props => <BottomTabNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Register2" component={Register2} options={{ headerShown: false }} />
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="EditPassword" component={EditPassword} options={{ headerShown: false }} />
      <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router
