import React from 'react'
import {Text, ScrollView, Button} from 'react-native';
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
          <Text> TEST TEST TesT</Text>
          <Text> TEST TEST TesT</Text>
          <Button title='Log' onPress={() => { navigation.navigate('Log')}}/>
    </ScrollView>
  )
}

export default HomeScreen
