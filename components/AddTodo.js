import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const handleNewTodoChange = (enteredValue) => {
    setEnteredTodo(enteredValue);
  };

  const handleAddTodo = () => {
    props.onTodoAdd(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        value={enteredTodo}
        onChangeText={handleNewTodoChange}
        placeholder="Enter your task"
        style={styles.input}
      />
      <Button title="ADD" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  addTodoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexGrow: 1,
    marginRight: 8,
  },
});

export default AddTodo;
