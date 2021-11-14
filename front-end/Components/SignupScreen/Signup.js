import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const Login = ({ navigation, setUsername }) => {

  const onSubmit = () => {
    navigation.navigate('Login')
  }

  return (
      <ScrollView>
        <TextInput
            style={{height: 40}}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
        />
        {/*<TextInput*/}
        {/*    style={{height: 40}}*/}
        {/*    placeholder="Email"*/}
        {/*    onChangeText={text => setEmail(text)}*/}
        {/*    defaultValue={email}*/}
        {/*/>*/}
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
      </ScrollView>
  )
}

export default Login
