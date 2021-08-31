import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (enteredTodo) => {
    if (!enteredTodo) {
      return;
    }

    setTodos((prev) => [
      ...prev,
      { id: (Date.now() + Math.random()).toString(), text: enteredTodo },
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Todo List</Text>
      <AddTodo onTodoAdd={handleAddTodo} />
      <TodosList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    marginHorizontal: 30,
    marginBottom: 115,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
