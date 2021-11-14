import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const Signup = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    navigation.navigate('Login', { username, password })
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

export default Signup