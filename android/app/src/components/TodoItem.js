import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={styles.container}>
      <Text style={[styles.text, todo.completed && styles.completed]}>{todo.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TodoItem;
