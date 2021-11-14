import React from 'react'
import Home from "./HomeScreen/Home";
import Log from "./LogScreen/Log";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

const Menu = ({ navigation, route }) => {
  const API = route.params.API;
  console.log(API)

  return (
    <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Log') {
              iconName = focused ? 'reader' : 'reader-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
    >
      <Tab.Screen name="Home" component={Home} initialParams={{ API }} />
      <Tab.Screen name="Log" component={Log} initialParams={{ API }}/>
    </Tab.Navigator>
  )
}

export default Menu
