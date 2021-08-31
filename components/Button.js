import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      style={[styles.btn, props.style]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    backgroundColor: "#2196F3",
    padding: 8,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
  },
});

export default Button;
