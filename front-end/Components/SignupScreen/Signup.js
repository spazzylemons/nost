import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    navigation.navigate('Login')
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
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            defaultValue={email}/>
        <TextInput
            style={{height: 40}}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            defaultValue={password}/>
        <Button
            onPress={onSubmit}
            title="Submit"
            color="#841584"
        />
      </ScrollView>
  )
}

export default LoginScreen
