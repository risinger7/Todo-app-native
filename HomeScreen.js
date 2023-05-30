import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Todo from "./components/Todo.js";
import DetailsScreen from "./DetailsScreen.js";

const DATA = [
  {
    id: 1,
    title: "Gå ut med hunden",
    text: "Se till att han har koppel",
    done: true,
  },
  {
    id: 2,
    title: "Mata katten",
    text: "Häll upp en skål mjölk",
    done: false,
  },
];

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState(DATA);

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todos</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Add", {
              todos: todos,
              setTodos: setTodos,
            })
          }
          style={styles.buttonAdd}
          title="Add"
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Todo
            navigation={navigation}
            todos={todos}
            setTodos={setTodos}
            id={item.id}
            done={item.done}
          ></Todo>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  titleContainer: {
    marginTop: 10,
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid black",
  },

  title: {
    marginLeft: 10,
    fontSize: "24px",
    color: "black",
  },

  buttonAdd: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "blue",
    height: "100%",
    width: 60,
  },
  buttonText: {
    color: "white",
    fontSize: "20px",
  },
});
