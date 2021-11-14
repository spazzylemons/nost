import React, { useState } from 'react'
import { Image, ScrollView, TextInput, Button } from 'react-native';

const Signup = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    try {
      await API.createUser(email, username, password);
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  }

  const onSkipLogin = () => {
    navigation.navigate('Login');
  }

  return (
      <ScrollView>
      <Image source={require('../../logo.svg')} style={{width: '8em', height: '4em', alignSelf: 'center'}} />
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
          <Button
              onPress={onSkipLogin}
              title="Skip to Login"
              color="#841584"
          />
      </ScrollView>
  )
}

export default Signup
