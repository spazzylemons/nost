import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";

const HomeScreen = ({ route }) => {
  const API = route.params.API
  const today = new Date();
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  console.log(API)
  // API.filterPosts(yesterday, today).then(r => console.log("test: " + r))

  const data = [{"text":"i had a good day today!","time":"2021-11-13T22:18:52.448766Z","user":1,"neg":0.0,"neu":0.484,"pos":0.516,"compound":0.4926},{"text":"I really like this place. It makes me very happy and I love it so much. But I also hate it a lot. And it's the worst place I've ever been to ever.","time":"2021-11-13T22:45:55.362217Z","user":1,"neg":0.256,"neu":0.574,"pos":0.17,"compound":-0.7632},{"text":"test","time":"2021-11-13T23:04:35.558507Z","user":1,"neg":0.0,"neu":1.0,"pos":0.0,"compound":0.0},{"text":"a","time":"2021-11-14T03:12:46.533282Z","user":1,"neg":0.0,"neu":0.0,"pos":0.0,"compound":0.0},{"text":"a","time":"2021-11-14T03:12:59.807445Z","user":1,"neg":0.0,"neu":0.0,"pos":0.0,"compound":0.0}]

<<<<<<< HEAD
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.text}</Text>
=======
const HomeScreen = ({ route }) => {
  const api = route.params.api;

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const [happyPosts, setHappyPosts] = useState('');
  const [neutralPosts, setNeutralPosts] = useState('');
  const [sadPosts, setSadPosts] = useState('');

  const [data, setData] = useState('');

  (async () => {
    const posts = await api.filterPosts(yesterday, today);
    setData(posts);
    // let tempHappy = "";
    // let tepmNeutral = "";
    // let tempSad = "";
    // for (const post of posts) {
    //   if (post.compound <= -0.5) {
    //     tempSad += post.text + '\n';
    //   } else if(post.compound >= 0.5) {
    //     tempHappy += post.text + '\n';
    //   } else {
    //     tepmNeutral += post.text + '\n';
    //   }
    // }
    // setHappyPosts(tempHappy);
    // setNeutralPosts(tepmNeutral);
    // setSadPosts(tempSad);
  })();

  const selectColor = (compound) => {
    if (compound <= -0.5) {
      return { color: '#800' };
    } else if (compound >= 0.5) {
      return { color: '#080' };
    } else {
      return {};
    }
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={{...styles.text, ...selectColor(item.compound)}}>{item.text}</Text>
>>>>>>> f7f14f9ec62ecad0725a582ae2d96bd4f0b85021
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.text}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
