import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddScreen from './AddScreen.js';
import HomeScreen from "./HomeScreen.js"
import DetailsScreen from './DetailsScreen.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Group>  
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Add" component={AddScreen} />
          </Stack.Group> 
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}


