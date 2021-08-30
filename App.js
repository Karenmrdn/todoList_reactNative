import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.addTodoContainer}>
        <TextInput placeholder="Enter your task" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    marginHorizontal: 30,
  },
  addTodoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexGrow: 1,
    marginRight: 8,
  },
});
