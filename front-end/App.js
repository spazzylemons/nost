import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Components/LoginScreen/Login';
import Signup from './Components/SignupScreen/Signup';
import Menu from './Components/Menu';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Signup'>
				<Stack.Screen name='Signup' component={Signup} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen
					name='Menu'
					component={Menu}
					options={{ headerLeft: null, headerShown: false }}
				/>
				{/*<Stack.Screen name="Home" component={HomeScreen} options={{headerLeft: null}}/>*/}
				{/*<Stack.Screen name="Log" component={Log} />*/}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
