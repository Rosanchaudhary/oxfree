
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from "./src/screens/SplashScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import CodeScreen from './src/screens/CodeScreen';
import FeedScreen from './src/screens/FeedScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    headerShown: false,
  }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Code" component={CodeScreen} />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


