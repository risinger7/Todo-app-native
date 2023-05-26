import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Todo from "./components/Todo.js"
import TodoList from './components/TodoList.js';
 
  const DATA = [
    {
      id: 1, 
      title: "Gå ut med hunden", 
      text: "Se till att han har koppel", 
      done: false},
    {
      id: 2, 
      title: "Mata katten",
      text: "Häll upp en skål mjölk", 
      done: false}
  ]

export default function HomeScreen({ navigation }) {

  const [todos, setTodos] = useState(DATA)

  return (
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Todos</Text>

          <Button onPress={() => navigation.navigate("Add", {
            todos: todos, setTodos: setTodos
          })}
            style={styles.buttonAdd} title='Add'></Button>
        
        </View>

        <TodoList todos={todos} setTodos={setTodos} navigation={navigation}></TodoList>
       
      </View> 
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  titleContainer: {
    marginTop: 20,
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "2px solid black",
  },

  title: {
    fontSize: 20,
    color: "#2012e2",
  },

  buttonAdd: {
    backgroundColor: "#151515",
    height: 20,
    width: 60,
  },

  items: {
    backgroundColor: "#18d3dd",
  }
});
