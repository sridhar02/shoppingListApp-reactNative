import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import { uuid } from "uuidv4";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Eggs" },
    { id: 3, text: "Bread" },
    { id: 4, text: "Juice" },
  ]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", { text: "ok" });
    } else {
      setItems((prevItems) => {
        return [{ id: 6, text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
