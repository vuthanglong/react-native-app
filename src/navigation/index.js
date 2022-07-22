import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import ControlScreen from '../screens/ControlScreen'
import DeviceScreen from '../screens/DeviceScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabBar = () => {
  return (
    <Tab.Navigator screenOptions={{ headerLeft: () => <Text>X</Text> }}>
      <Tab.Screen name='Control' component={ControlScreen} />
      <Tab.Screen name='Devices' component={DeviceScreen} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='Home' component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
