import React, {useState} from 'react'
import { Button, View } from 'react-native';
import Home from "./HomeScreen/Home";
import Log from "./LogScreen/Log";

const Menu = ({ navigation, route }) => {
  const { api } = route.params;

  const [atHome, setAtHome] = useState(true);

  return (
      <>
        <View>
          {atHome ? <Home /> : <Log api={api} />}
        </View>
        <View>
          <Button title='Home' onPress={() => { setAtHome(true) }}/>
          <Button title='Log' onPress={() => { setAtHome(false) }}/>
        </View>
      </>
  )
}

export default Menu
