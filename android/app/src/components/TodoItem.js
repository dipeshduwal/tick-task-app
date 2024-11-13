import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={styles.checkbox}>
        {todo.completed ? (
          <Icon name="check-circle" size={24} color="#4CAF50" />
        ) : (
          <Icon name="radio-button-unchecked" size={24} color="#f39c12" />
        )}
      </TouchableOpacity>

      <Text style={[styles.text, todo.completed && styles.completed]}>
        {todo.title}
      </Text>

      <TouchableOpacity onPress={() => deleteTodo(todo.id)} style={styles.deleteButton}>
        <Icon name="delete" size={24} color="#e74c3c" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: '#333',
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
