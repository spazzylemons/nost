import API from '../../API';
import React, { useState } from 'react'
import { ScrollView, TextInput, Button } from 'react-native';

const Login = ({ navigation, route}) => {

  const [currentUsername, setCurrentUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const onSubmit = async () => {
      try {
        const api = await API.create(currentUsername, currentPassword);
        navigation.navigate('Menu', { api });
      } catch (e) {
        console.log(e);
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
