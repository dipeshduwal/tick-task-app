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
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <AddTodo addTodo={addTodo} />

      <Text style={styles.subHeader}>Incomplete</Text>
      <FlatList
        data={todos.filter(todo => !todo.completed)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )}
      />

      <Text style={styles.subHeader}>Completed</Text>
      <FlatList
        data={todos.filter(todo => todo.completed)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
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
  subHeader: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 8,
  },
});

export default HomeScreen;
