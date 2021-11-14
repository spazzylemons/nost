import React, { useState } from 'react'
import { ScrollView, TextInput, Button } from 'react-native';
import API from '../../API';
import axiosInstance from '../../axios';
const Signup = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const axiosInstance1 = axiosInstance();
  async function onSubmit() {
    try {
      let response = await axiosInstance1.post(
        'user/create/',
        { email, username, password }
      );


      
      navigation.navigate('Login');
    } catch (e) {
      throw e;
    }
  }

  const onSkipLogin = () => {
    navigation.navigate('Login');
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
            name="password"
            placeholder="PASSWORD"
            secureTextEntry={true}
            placeholderTextColor="#86b4b5"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setPassword(text)}
          />
          <Button
              onPress={onSubmit}
              title="Submit"
              color="#841584"
          />
          <Button
              onPress={onSkipLogin}
              title="Skip to Login"
              color="#841584"
          />
      </ScrollView>
  )
}

export default Signup
