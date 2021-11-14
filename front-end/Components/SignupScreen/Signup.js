import React, { useState } from 'react'
import { ScrollView, TextInput, Button } from 'react-native';
import API from "../../API";

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
