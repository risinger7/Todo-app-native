import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route, navigation }) {

  const { todos, setTodos, id, title, text, done } = route.params

  function handleDelete(id) {
      setTodos(todos.filter((item) => item.id !== id));
      navigation.navigate("Home")
  };

  useEffect(() => {
    console.log("done update? ", done)
  }, [todos])
  
  return (
    <View style={styles.detailsWrapper}>
      <View style={styles.title}>
      <Text style={done ? styles.doneTitle : styles.title}>
      {title}
    </Text>
      </View>
      <Text>{id}</Text>
      <View style={styles.title}>
        <Text>{text}</Text>
      </View>

      <TouchableOpacity
          style={styles.button}
          title="Go home.."
          Text="Go to Home..."
          onPress={() => handleDelete(id)}
      ><Text>Delete</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        title="Go home.."
        Text="Go to Home..."
        onPress={() => navigation.navigate('Home')}
      ><Text>GO BACK WITH A TOUCH HERE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  detailsWrapper: {
    border: "1px solid black",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    width: "100%",
    height: 30,
    backgroundColor: "orange",
  }
})