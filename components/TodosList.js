import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  return (
    <FlatList
      data={props.todos}
      renderItem={(itemData) => (
        <TodoItem itemData={itemData} onRemoveTodo={props.onRemoveTodo} />
      )}
    />
  );
};

export default TodosList;
