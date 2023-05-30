import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { todos, setTodos, toggleDone, id, title, text, done } = route.params;

  function handleDelete(id) {
    setTodos(todos.filter((item) => item.id !== id));
    navigation.navigate("Home"); // send back home after delete
  }

  function toggleDone() {
    return !done;
  }

  useEffect(() => {
    console.log("done changed");
  }, [todos]);

  console.log("Donnee", done);

  return (
    <View style={styles.detailsWrapper}>
      {done && <View>Hello there done</View>}

      <View style={styles.title}>
        <Text>{title}</Text>
        <Text>{text}</Text>
        <Text>{id}</Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        title="toggle"
        Text="toggle"
        onPress={() => toggleDone(id)}
      >
        <Text>toggle done</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        title="Delete"
        Text="Delete"
        onPress={() => handleDelete(id)}
      >
        <Text>Delete</Text>
      </TouchableOpacity>

      <View style={styles.buttons}>
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
    justifyContent: "space-between",
    alignItems: "space-between",
  },

  doneButton: {
    backgroundColor: "green",
    width: "100%",
    height: 30,
  },

  buttons: {
    border: "2px solid blue",
    flexDirection: "row",
    alignItems: "space-evenly",
  },

  homeButton: {
    height: 30,
    width: "50%",
    backgroundColor: "yellow",
  },

  deleteButton: {
    width: "50%",
    height: 30,
    backgroundColor: "orange",
  },
});
