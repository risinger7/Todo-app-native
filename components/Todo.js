import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

export default function Todo(props) {
  const { navigation, todos, setTodos, toggleDone, id, title, text, done } =
    props;

  const todo = todos.map((todo) => todo.id == id);
  console.log(todo, "todododododo");
  console.log("tgoogle", toggleDone);
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity
          title="hej"
          style={styles.checkBox}
          onPress={() =>
            navigation.navigate("Details", {
              todos: todos,
              setTodos: setTodos,
              toggleDone: toggleDone,
              id: id,
              title: title,
              text: text,
              done: done,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoWrapper: {
    backgroundColor: "#f2f2f2",
    border: "1px solid black",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    color: "black",
    padding: 10,
    margin: 10,
  },

  container1: {
    border: "1px solid red",
    flexDirection: "row",
    alignItems: "top",
    maxWidth: "80%",
    maxHeight: "100%",
    overflow: "hidden",
  },

  checkBox: {
    borderRadius: 5,
    border: "2px solid black",
    height: 30,
    width: 30,
    backgroundColor: "none",
  },

  title: {
    border: "1px solid orange",
    fontSize: "20px",
    color: "red",
    maxHeight: "100%",
    maxWidth: "80%",
    overflow: "hidden",
  },

  container2: {
    backgroundColor: "green",
  },
});
