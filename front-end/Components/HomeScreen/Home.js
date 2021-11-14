import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

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
