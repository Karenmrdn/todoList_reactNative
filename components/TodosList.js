import React from "react";
import { FlatList, Text } from "react-native";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  return (
    <FlatList
      data={props.todos}
      renderItem={(itemData) => <TodoItem itemData={itemData} />}
    />
  );
};

export default TodosList;
