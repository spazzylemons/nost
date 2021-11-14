import React from 'react'
import { ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

const HomeScreen = () => {
  return (
    <ScrollView>
          <Avatar
              backgroundColor="blue"
              size="large"
              title="M"
              activeOpacity={0.7}
          />

    </ScrollView>
  )
}

export default HomeScreen
