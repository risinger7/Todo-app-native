import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function AddScreen({ route, navigation }) {
  const { todos, setTodos } = route.params;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleAdd() {
    if (text !== "" && title !== "") {
      const newTodo = {
        id: Date.now(),
        title: title,
        text: text,
        done: false,
      };
      setTitle("");
      setText("");
      setTodos([...todos, newTodo]);

      navigation.goBack();
    }
  }

  return (
    <View style={styles.todoForm}>
      <TextInput
        style={styles.inputTitle}
        placeholder="Enter title"
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Enter description"
        value={text}
        onChangeText={(value) => setText(value)}
      />

      <View style={styles.dismissButton}>
        <Button style={styles.addButton} title="Add" onPress={handleAdd} />
      </View>
      <View style={styles.dismissButton}>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid yellow",
  },

  addButton: {
    backgroundColor: "blue",
    marginTop: 10,
    marginBottom: 10,
  },
  dismissButton: {
    color: "white",
    backgroundColor: "black",
    marginTop: 10,
    marginBottom: 10,
  },

  inputTitle: {
    border: "2px solid blue",
    width: "100%",
    height: 40,
  },
  inputText: {
    border: "2px solid blue",
    width: "100%",
    height: 60,
  },
});
