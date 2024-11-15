import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';
import { ProgressBar } from 'react-native-paper';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('All');

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), ...newTodo, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo =>
      todo.id === id ? updatedTodo : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    return (
      (filter === 'All' || (filter === 'Completed' && todo.completed) || (filter === 'Incomplete' && !todo.completed)) &&
      todo.title.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const progress = todos.length ? Number(((todos.filter(todo => todo.completed).length / todos.length) * 100).toFixed(2)) / 100 : 0;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>To-Do Lists</Text>
        <TextInput
          style={styles.search}
          placeholder="Search tasks..."
          placeholderTextColor="grey"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>

      <ProgressBar progress={progress} color="#3498db" style={styles.progressBar} />

      <AddTodo addTodo={addTodo} />

      <View style={styles.filterContainer}>
        {['All', 'Completed', 'Incomplete'].map(status => (
          <Text
            key={status}
            onPress={() => setFilter(status)}
            style={[
              styles.filterText,
              filter === status && styles.activeFilter
            ]}
          >
            {status}
          </Text>
        ))}
      </View>

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TodoItem todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          </ScrollView>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  headerContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  header: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  progressBar: { height: 10, marginBottom: 10 },
  search: {
    flex: 1,
    maxWidth: '50%',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    color: 'black',
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 10
  },
  filterContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  filterText: { fontSize: 16, color: '#3498db' },
  activeFilter: { fontWeight: 'bold', color: '#1abc9c' }
});

export default HomeScreen;
