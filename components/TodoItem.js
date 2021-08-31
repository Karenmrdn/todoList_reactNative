import React from "react";
import { Text, StyleSheet } from "react-native";

const TodoItem = ({ itemData }) => {
  return (
    <Text style={styles.listItem}>
      {itemData.index + 1 + ". " + itemData.item.text}
    </Text>
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
