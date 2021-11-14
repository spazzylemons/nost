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
          name="username"
          type="text"
          placeholder="USERNAME"
          placeholderTextColor="#86b4b5"
          returnKeyType="next"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
      />
      <TextInput
          style={{height: 40}}
          name="password"
          placeholder="PASSWORD"
          secureTextEntry={true}
          placeholderTextColor="#86b4b5"
          autoCapitalize="none"
          autoCorrect={false}
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
