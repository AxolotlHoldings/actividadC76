import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigatorContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Stack = CreateStackNavigator();

export default function App() {
  return (
    <NavigatorContainer>
      <Snack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown: false
      }}>
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "IssLocaction" component = {IssLocationScreen}/>
      <Stack.Screen name = "Meteors" component = {MeteorScreen}/>
      <Stack.Screen name = "Updates" component = {UpdateScreen}/>
      </Snack.Navigator>
    </NavigatorContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
