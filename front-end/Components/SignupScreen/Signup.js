import React, { useState } from 'react'
import { ScrollView, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            defaultValue={email}
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
