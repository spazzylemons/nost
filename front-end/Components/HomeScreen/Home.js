import React from 'react'
import { Text, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Avatar
          backgroundColor="blue"
          size="large"
          title="LW"
          activeOpacity={0.7}
      />
      <Text> TEST TEST TesT</Text>
      <Text> TEST TEST TesT</Text>
    </ScrollView>
  )
}

export default HomeScreen
