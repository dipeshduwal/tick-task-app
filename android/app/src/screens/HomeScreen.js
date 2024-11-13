import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = { id: Date.now().toString(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <AddTodo addTodo={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
