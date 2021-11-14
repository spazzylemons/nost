import React, { useState } from 'react'
import {
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet, View,
  Image,
} from 'react-native';

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
      console.log('test')
      throw e;
    }
  }

  const onSkipLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../logo.svg')} style={{width: '8em', height: '4em', alignSelf: 'center'}} />
        <View style={styles.inputView}>
          <TextInput
              style={ styles.TextInput }
              placeholder="Username"
              onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
              style={ styles.TextInput }
              placeholder="Username"
              onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
              style={ styles.TextInput }
              name="Password"
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity onPress={onSkipLogin}>
          <Text style={{ color: 'blue'}}> Already have an account? Log in instead!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignupBtn} onPress={onSubmit}>
          <Text style={{fontSize: 20}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: "70%",
    height: 45,
    borderRadius: 30,
    backgroundColor: "#FFC0CB",
    marginBottom: 20,
  },
  TextInput: {
    flex: 1,
    borderRadius: 30,
    padding: 10,
  },
  SignupBtn: {
    width: "70%",
    height: 50,
    borderRadius: 25,
    backgroundColor: 'hotpink',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Signup
