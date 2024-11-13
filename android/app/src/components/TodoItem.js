import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={styles.checkbox}>
        {todo.completed ? (
          <Icon name="check-box" size={24} color="green" />
        ) : (
          <Icon name="check-box-outline-blank" size={24} color="gray" />
        )}
      </TouchableOpacity>

      <Text style={[styles.text, todo.completed && styles.completed]}>
        {todo.title}
      </Text>

      <TouchableOpacity onPress={() => deleteTodo(todo.id)} style={styles.deleteButton}>
        <Icon name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  checkbox: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default TodoItem;
