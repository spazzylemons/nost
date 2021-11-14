import React from 'react'
import { ScrollView, Button, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
          <Avatar
              backgroundColor="blue"
              size="large"
              title="LW"
              activeOpacity={0.7}
          />

    </ScrollView>
  )
}

export default HomeScreen
