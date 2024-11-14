import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Due Date');

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), ...newTodo, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
  };

  const sortedTodos = todos
    .filter(todo => (filter === 'All' || (filter === 'Completed' && todo.completed) || (filter === 'Incomplete' && !todo.completed)))
    .filter(todo => todo.title.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'Due Date') {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else {
        return ['Low', 'Medium', 'High'].indexOf(a.priority) - ['Low', 'Medium', 'High'].indexOf(b.priority);
      }
    });

  const progress = todos.length ? todos.filter(todo => todo.completed).length / todos.length : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <ProgressBar progress={progress} color="#3498db" style={styles.progressBar} />

      <TextInput
        style={styles.search}
        placeholder="Search tasks..."
        placeholderTextColor="#888"
        onChangeText={setSearchText}
        value={searchText}
      />

      <AddTodo addTodo={addTodo} />

      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort by:</Text>
        {['Due Date', 'Priority'].map(option => (
          <TouchableOpacity key={option} onPress={() => setSortOption(option)}>
            <Text style={[styles.sortOption, sortOption === option && styles.activeSort]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={sortedTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  progressBar: { height: 8, marginBottom: 16 },
  search: { padding: 8, borderBottomWidth: 1, borderBottomColor: '#ddd', marginBottom: 16 },
  sortContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  sortLabel: { fontSize: 16, color: '#333' },
  sortOption: { fontSize: 16, color: '#3498db' },
  activeSort: { fontWeight: 'bold', color: '#1abc9c' },
});

export default HomeScreen;
