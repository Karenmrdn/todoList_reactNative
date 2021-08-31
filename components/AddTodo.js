import React, { useState } from "react";
import { View, TextInput, StyleSheet, Modal } from "react-native";
import Button from "./Button";

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const handleNewTodoChange = (enteredValue) => {
    setEnteredTodo(enteredValue);
  };

  const handleAddTodo = () => {
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.addTodoContainer}>
        <TextInput
          value={enteredTodo}
          onChangeText={handleNewTodoChange}
          placeholder="Enter your task"
          style={styles.input}
        />
        <View style={styles.buttonsContainer}>
          <Button
            onPress={props.onClose}
            title="Close"
            style={styles.btnClose}
          />
          <Button onPress={handleAddTodo} title="Add" style={styles.btnAdd} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addTodoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
    width: "80%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  btnAdd: {
    width: "45%",
  },
  btnClose: {
    width: "45%",
    backgroundColor: "#000",
  },
});

export default AddTodo;
