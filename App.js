import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import Button from "./components/Button";

const initialTodos = [
  { id: "1", text: "Learn React Native", checked: false },
  { id: "2", text: "Learn React", checked: true },
  { id: "3", text: "Learn JS", checked: true },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddTodo = (enteredTodo) => {
    if (!enteredTodo) {
      return;
    }

    setTodos((prev) => [
      {
        id: (Date.now() + Math.random()).toString(),
        text: enteredTodo,
        checked: false,
      },
      ...prev,
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleAddMode = () => {
    setIsAddMode((prev) => !prev);
  };

  const toggleTodoStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    updatedTodos.sort((a, b) => a.checked - b.checked);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Todo List</Text>
        <Button title="+" onPress={toggleAddMode} style={styles.btnAdd} />
      </View>
      <AddTodo
        onAddTodo={handleAddTodo}
        onClose={toggleAddMode}
        visible={isAddMode}
      />
      <TodosList
        todos={todos}
        onRemoveTodo={removeTodo}
        onStatusChange={toggleTodoStatus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 90,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  btnAdd: {
    width: 36,
    borderRadius: 999,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
