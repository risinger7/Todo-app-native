import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
 
} from "react-native";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todos, setTodos, navigation, done } = props;

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id} // toString() maybe
      renderItem={({ item }) => (
        <View>
          <Todo
            id={item.id}
            title={item.title}
            text={item.text}
            navigation={navigation}
            done={item.done}
          ></Todo>
        </View>
      )}
    />
  );
};

export default TodoList;
