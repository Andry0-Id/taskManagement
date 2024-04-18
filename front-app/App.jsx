import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login';
import Todo from './screen/Todo';
import TodoDay from "./screen/subscreen/TodoDaily";
import Monday from './screen/subscreen/day/Monday';

const MainStack = createNativeStackNavigator();
const SubStack = createNativeStackNavigator();

function SubScreenNavigator() {
 return (
    <SubStack.Navigator>
      <SubStack.Screen 
        name="Daily Task" 
        component={TodoDay} 
        options={{ headerShown: true }}
      />
      <SubStack.Screen
        name='Monday'
        component={Monday}
        options={{headerShown: true}}
      />
    </SubStack.Navigator>
 );
}

export default function App() {
 return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <MainStack.Screen 
          name="Todo" 
          component={Todo} 
        />
        <MainStack.Screen 
          name="SubScreen" 
          component={SubScreenNavigator} 
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
 );
}
