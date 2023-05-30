import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

export default function Todo(props) {
  const { navigation, todos, setTodos, id, done } = props;

  const todo = todos.find((todo) => todo.id === id);
  console.log(todo.done, "done");
  const handleToggle = (id) => {
    const copyTodos = [...todos];
    copyTodos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });
    setTodos(copyTodos);
  };

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.container1}>
        <TouchableOpacity
          title="button"
          style={[
            styles.text,
            styles.checkBox,
            todo.done ? styles.isDone : styles.notDone,
          ]}
          onPress={() => handleToggle(id)}
        ></TouchableOpacity>
        <Text style={styles.title}>{todo.title}</Text>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity
          title="hej"
          style={styles.checkBox}
          onPress={() =>
            navigation.navigate("Details", {
              todos: todos,
              setTodos: setTodos,
              id: id,
              done: done,
            })
          }
        >
          <Text>Edit</Text>
        </TouchableOpacity>
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
    marginTop: 10,
  },

  text: {
    color: "green",
    textDecorationColor: "none",
  },

  container1: {
    border: "1px solid black",
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
  },

  isDone: {
    backgroundColor: "green",
  },
  notDone: {
    backgroundColor: "none",
  },

  title: {
    marginLeft: 10,
    lineHeight: 30,
    fontSize: "20px",
    color: "black",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },

  done: {
    position: "absolute",
  },

  container2: {
    border: "2px solid black",
    backgroundColor: "none",
  },
});
