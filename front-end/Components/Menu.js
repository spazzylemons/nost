import React, {useState} from 'react'
import { ScrollView, Button, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Home from "./HomeScreen/Home";
import Log from "./LogScreen/Log";

const HomeScreen = ({ navigation }) => {
  const [atHome, setAtHome] = useState(true);

  return (
      <>
        <View>
          {atHome ? <Home /> : <Log />}
        </View>
        <View>
          <Button title='Home' onPress={() => { setAtHome(true) }}/>
          <Button title='Log' onPress={() => { setAtHome(false) }}/>
        </View>
      </>
  )
}

export default HomeScreen
