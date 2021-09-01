import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Checkbox } from "react-native-paper";
import Button from "./Button";

const TodoItem = (props) => {
  const handleStatusChange = () => {
    props.onStatusChange(props.id);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.firstContainer}>
        <Checkbox
          status={props.checked ? "checked" : "unchecked"}
          onPress={handleStatusChange}
          color="#2196F3"
        />
        <Text>{props.text}</Text>
      </View>
      <Button
        title="delete"
        onPress={() => props.onRemoveTodo(props.id)}
        style={styles.btn}
        textStyle={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#2196F3",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#fff",
    // borderColor: "#f44336",
    // borderWidth: 1,
    // borderRadius: 8,
  },
  text: {
    color: "#f44336",
    fontWeight: "bold",
  },
});

export default TodoItem;
