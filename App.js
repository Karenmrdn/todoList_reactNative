import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import Button from "./components/Button";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddTodo = (enteredTodo) => {
    if (!enteredTodo) {
      return;
    }

    setTodos((prev) => [
      ...prev,
      { id: (Date.now() + Math.random()).toString(), text: enteredTodo },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleAddMode = () => {
    setIsAddMode((prev) => !prev);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Todo List</Text>
        <View>
          <Button title="+" onPress={toggleAddMode} style={styles.btnAdd} />
        </View>
      </View>
      <AddTodo
        onAddTodo={handleAddTodo}
        onClose={toggleAddMode}
        visible={isAddMode}
      />
      <TodosList todos={todos} onRemoveTodo={removeTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    marginHorizontal: 30,
    marginBottom: 115,
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
