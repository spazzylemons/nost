import API from '../../API';
import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  View,
  TouchableOpacity
} from 'react-native';
import Text
  from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";

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
      <Text>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
      <Text>LOGIN</Text>
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
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  }
});

export default Login
