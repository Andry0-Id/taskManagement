import { View, Text } from 'react-native'
import React from 'react'

import Login from './screen/Login';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './screen/Todo';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Todo" 
          component={Todo} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}