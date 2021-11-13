import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./Components/LoginScreen/Login";
import HomeScreen from "./Components/HomeScreen/Home";
import Signup from "./Components/SignupScreen/Signup";

const Stack = createNativeStackNavigator();

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          {/*<Stack.Screen name="Signup" component={SignupScreen} />*/}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
