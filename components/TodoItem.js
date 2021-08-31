import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onRemoveTodo(props.itemData.item.id)}
      activeOpacity={0.8}
    >
      <Text style={styles.listItem}>
        {props.itemData.index + 1 + ". " + props.itemData.item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#61b4ec",
    borderColor: "#005dd6",
    borderWidth: 1,
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
    justifyContent: "space-between",
  },
});

export default TodoItem;
