import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./Components/LoginScreen/LoginScreen";
import HomeScreen from "./Components/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          {/*<Stack.Screen name="Signup" component={SignupScreen} />*/}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
