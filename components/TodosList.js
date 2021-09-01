import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  return (
    <FlatList
      data={props.todos}
      renderItem={(itemData) => (
        <TodoItem
          id={itemData.item.id}
          text={itemData.item.text}
          checked={itemData.item.checked}
          onRemoveTodo={props.onRemoveTodo}
          onStatusChange={props.onStatusChange}
        />
      )}
    />
  );
};

export default TodosList;
