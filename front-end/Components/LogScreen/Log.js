import React, { useState } from 'react'
import { Button, Text, TextInput, ScrollView } from 'react-native';

const Log = ({ api }) => {
  console.log(api);
  const [text, setText] = useState('');

  const onSubmitText = async () => {
    if (text === '') {
      console.log('type something please');
    } else {
      try {
        await api.createTextPost(text);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
      <ScrollView>
        <Button title='Submit some text' onPress={onSubmitText}/>
        <TextInput
          style={{height: 40}}
          placeholder="Text"
          onChangeText={text => setText(text)}
        />
        <Text> Filler </Text>
      </ScrollView>
  )
}

export default Log
