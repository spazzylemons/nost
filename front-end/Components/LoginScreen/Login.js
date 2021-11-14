import API from '../../API';
import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

const Login = ({ navigation }) => {

  const [currentUsername, setCurrentUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const onLogin = async () => {
      try {
        const api = await API.create(currentUsername, currentPassword);
        navigation.navigate('Menu', { api });
      } catch (e) {
        console.log(e);
      }
  }

  return (
  <View style={styles.container}>
    <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          onChangeText={text => setCurrentUsername(text)}
          name="username"
          type="text"
          placeholder="Username"
          placeholderTextColor="#86b4b5"
          returnKeyType="next"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Password"
          name="password"
          secureTextEntry={true}
          placeholderTextColor="#86b4b5"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setCurrentPassword(text)}
          />
    </View>
    <TouchableOpacity>
      <Text style={{color: 'blue'}}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
      <Text style={{fontSize: 20, }}> Log In </Text>
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
  loginBtn: {
    width:"70%",
    height:50,
    borderRadius:25,
    backgroundColor:"#FF1493",
    marginTop:40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Login
