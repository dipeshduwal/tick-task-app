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
      <Text style={styles.header}>Your Tasks</Text>
      <AddTodo addTodo={addTodo} />

      <Text style={styles.subHeader}>Incomplete Tasks</Text>
      <FlatList
        data={todos.filter(todo => !todo.completed)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>All caught up! 🎉</Text>}
      />

      <Text style={styles.subHeader}>Completed Tasks</Text>
      <FlatList
        data={todos.filter(todo => todo.completed)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks completed yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f7f9',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginTop: 20,
    marginBottom: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
    marginTop: 10,
  },
});

export default HomeScreen;
