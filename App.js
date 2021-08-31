import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todosList = todos.map((todo, index) => (
    <View key={Date.now() + Math.random()} style={styles.listItem}>
      <Text>{index + 1 + ". " + todo}</Text>
    </View>
  ));

  const handleNewTodoChange = (enteredValue) => {
    setEnteredTodo(enteredValue);
  };

  const handleAddTodo = () => {
    if (enteredTodo) {
      setTodos((prev) => [...prev, enteredTodo]);
      setEnteredTodo("");
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Todo List</Text>
      <View style={styles.addTodoContainer}>
        <TextInput
          value={enteredTodo}
          onChangeText={handleNewTodoChange}
          placeholder="Enter your task"
          style={styles.input}
        />
        <Button title="ADD" onPress={handleAddTodo} />
      </View>
      <ScrollView>{todosList}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    marginHorizontal: 30,
    marginBottom: 130,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  addTodoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  listItem: {
    backgroundColor: "#61b4ec",
    borderColor: "#005dd6",
    borderWidth: 1,
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexGrow: 1,
    marginRight: 8,
  },
});
