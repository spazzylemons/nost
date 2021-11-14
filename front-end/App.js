import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./Components/LoginScreen/Login";
import HomeScreen from "./Components/HomeScreen/Home";
import Signup from "./Components/SignupScreen/Signup";
import Log from "./Components/LogScreen/Log";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options={{headerLeft: null}}/>
          <Stack.Screen name="Log" component={Log} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
