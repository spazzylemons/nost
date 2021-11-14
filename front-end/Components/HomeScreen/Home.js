import React from "react";
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
  const api = route.params.api
  const today = new Date();
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  console.log(today)
  console.log(yesterday)

  api.filterPosts(yesterday, today).then(r => console.log("test: " + r))

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Avatar
            size="large"
            title="M"
            activeOpacity={0.7}
        />
      {/*Flatlist or virtualized list?*/}
      {/*<FlatList*/}
      {/*    data={DATA}*/}
      {/*    renderItem={renderItem}*/}
      {/*    keyExtractor={(item) => { console.log(item.id); item.id} }*/}
      {/*/>*/}

      {/*{ array.forEach((obj) => {*/}
      {/*  console.log(obj.id);*/}
      {/*  const { text, sentiment, username } = array;*/}

      {/* return (*/}
      {/*  <View>*/}
      {/*    <Text>{ text }</Text>*/}
      {/*    <Text>{ username }</Text>*/}
      {/*  </View>*/}
      {/* )*/}
      {/*  })};*/}
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
