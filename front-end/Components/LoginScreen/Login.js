import React, { useState } from 'react'
import { ScrollView, TextInput, Button } from 'react-native';

const Login = ({ navigation, route}) => {

  const { username, password } = route.params;

  const [currentUsername, setCurrentUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const onSubmit = () => {
      if (currentUsername === username && currentPassword === password) {
        navigation.navigate('Menu')
      } else {
        console.log('Incorrect Password')
        console.log(currentPassword)
        console.log(password)
      }
  }

  return (
  <ScrollView>
      <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={text => setCurrentUsername(text)}
      />
      <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={text => setCurrentPassword(text)}
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
