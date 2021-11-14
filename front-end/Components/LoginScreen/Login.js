import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const Login = ({ navigation, route}) => {

  const { username, password, setUsername, setPassword } = route.params;

  const onSubmit = () => {
    navigation.navigate('Home')
  }

  return (
    <ScrollView>
      <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
      />
      <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
      />
      <Button
          onPress={onSubmit}
          title="Submit"
          color="#841584"
      />
    </ScrollView>
  )
}

export default Login
