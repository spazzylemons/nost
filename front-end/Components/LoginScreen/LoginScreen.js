import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    navigation.navigate('Home')
  }

  return (
    <ScrollView>
      <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          defaultValue={username}
      />
      <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          defaultValue={password}/>
      <Button
          onPress={onSubmit}
          title="Submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
    </ScrollView>
  )
}

export default LoginScreen
