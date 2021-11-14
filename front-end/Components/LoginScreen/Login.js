import API from "../../API";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import AxiosInstance from "./../../axios";
const Login = ({ navigation }) => {
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const AxiosInstance1 = AxiosInstance(false);
  const onLogin = async () => {
    try {
      let api = await AxiosInstance1.post(
        "token/obtain/",
        JSON.stringify({
          username: currentUsername,
          password: currentPassword,
        })
      );
      navigation.navigate("Menu", { ...api.data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../logo.svg")}
        style={{
          width: "5%",
          height: "10%",
          alignSelf: "center",
          marginBottom: 10,
        }}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => setCurrentUsername(text)}
          name="username"
          type="text"
          placeholder="Username"
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
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setCurrentPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={{ color: "blue" }}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
        <Text style={{ fontSize: 20 }}> Log In </Text>
      </TouchableOpacity>

      <Text>{"password " + currentPassword}</Text>
      <Text>{"username :" + currentUsername}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    width: "70%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF1493",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
