import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { todos, setTodos, id, done } = route.params;
  const [isDone, setIsDone] = useState(done);

  const todo = todos.find((todo) => todo.id === id);
  function handleDelete(id) {
    setTodos(todos.filter((item) => item.id !== id));
    navigation.navigate("Home"); // send back home after delete
  }

  const handleToggle = (id) => {
    const copyTodos = [...todos];
    copyTodos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
        setIsDone(todo.done); // toggle done in Details
      }
    });
    setTodos(copyTodos);
  };

  return (
    <View style={styles.detailsWrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text>{todo.text}</Text>
      </View>

      <TouchableOpacity
        style={[styles.doneButton, isDone ? styles.isDone : styles.notDone]}
        title="toggle"
        Text="toggle"
        onPress={() => handleToggle(id)}
      >
        <Text>
          {isDone ? <Text>Todo is done</Text> : <Text>Todo is not done</Text>}
        </Text>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.deleteButton}
          title="Delete"
          Text="Delete"
          onPress={() => handleDelete(id)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeButton}
          title="Go home.."
          Text="Go to Home..."
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsWrapper: {
    border: "1px solid black",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#151515",
    fontSize: "20px",
  },

  doneButton: {
    border: "2px solid black",
    backgroundColor: "#fff",
    width: "100%",
    height: 30,
  },

  isDone: {
    backgroundColor: "green",
  },
  notDone: {
    backgroundColor: "red",
  },

  buttons: {
    width: "100%",
    border: "2px solid blue",
    flexDirection: "row",
    alignItems: "space-evenly",
  },

  homeButton: {
    border: "2px solid #151515",
    height: 30,
    width: "50%",
  },

  deleteButton: {
    width: "50%",
    height: 30,
    backgroundColor: "orange",
  },
});
